const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

const hasSavedTheme = () => {
  try {
    return Boolean(localStorage.getItem("nastya-theme"));
  } catch {
    return false;
  }
};

const setTheme = (theme, save = false) => {
  root.dataset.theme = theme;

  const nextThemeName = theme === "dark" ? "светлую" : "тёмную";
  const label = `Включить ${nextThemeName} тему`;

  if (themeButton) {
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label;
  }

  if (themeColor) {
    themeColor.content = theme === "dark" ? "#171214" : "#fff8f4";
  }

  if (save) {
    try {
      localStorage.setItem("nastya-theme", theme);
    } catch {
      // Тема продолжит работать в текущей вкладке.
    }
  }
};

setTheme(root.dataset.theme || "light");

themeButton?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener?.("change", (event) => {
  if (!hasSavedTheme()) {
    setTheme(event.matches ? "dark" : "light");
  }
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(
  ".blog-intro > *, .article-card, .guide-header, .guide-layout, .routine-photo, .routine-content > *, .trust-heading, .trust-photo, .trust-columns, .trust-boundary, .support-content > *, .boundaries-story > *, .repair-story > *, .reset-tool > *, .safety-inner > *, .blog-ending > *"
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
});

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const copyWithFallback = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.append(textArea);
  textArea.select();

  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) {
    throw new Error("copy-failed");
  }
};

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.copyTarget;
    const source = targetId ? document.getElementById(targetId) : null;
    const status = button.parentElement?.querySelector(".copy-status");
    const defaultLabel = button.dataset.defaultLabel || button.textContent;

    if (!source) {
      button.classList.add("is-error");
      button.textContent = "Не получилось";
      if (status) {
        status.textContent = "Текст не найден. Его можно выделить и скопировать вручную.";
      }
      return;
    }

    button.disabled = true;
    button.textContent = "Копирую";
    button.classList.remove("is-success", "is-error");

    try {
      await copyWithFallback(source.textContent.trim());
      button.classList.add("is-success");
      button.textContent = "Скопировано";
      if (status) {
        status.textContent = "Фраза в буфере обмена.";
      }
    } catch {
      button.classList.add("is-error");
      button.textContent = "Не получилось";
      if (status) {
        status.textContent = "Браузер запретил копирование. Выделите текст вручную.";
      }
    } finally {
      window.setTimeout(() => {
        button.disabled = false;
        button.classList.remove("is-success", "is-error");
        button.textContent = defaultLabel;
        if (status) {
          status.textContent = "";
        }
      }, 2600);
    }
  });
});
