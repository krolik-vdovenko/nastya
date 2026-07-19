const reasons = [
  "За твои удивительные зелёные глаза.",
  "За тот особенный взгляд, в котором я каждый раз теряюсь.",
  "За твою улыбку, от которой обычный день становится светлее.",
  "За твой живой, искренний и самый любимый смех.",
  "За твой голос, который мне всегда хочется слышать.",
  "За твою заботу, даже когда она прячется в мелочах.",
  "За нежность, которую ты даришь так естественно.",
  "За то, что умеешь по-настоящему слушать.",
  "За твою честность со мной.",
  "За искренность, с которой ты проживаешь свои чувства.",
  "За смелость оставаться собой.",
  "За твою красоту, которой не нужны никакие доказательства.",
  "За то, какая ты красивая по утрам.",
  "За каждую эмоцию, которая отражается на твоём лице.",
  "За твоё доброе сердце.",
  "За поддержку, которую я чувствую рядом с тобой.",
  "За то, что ты веришь в меня, даже когда я сомневаюсь.",
  "За твоё терпение.",
  "За огонёк внутри тебя.",
  "За твои мечты, о которых мне хочется заботиться.",
  "За твою решительность, когда ты знаешь, чего хочешь.",
  "За умение радоваться маленьким моментам.",
  "За то, как мы можем смеяться над полной ерундой.",
  "За тишину рядом с тобой, которая никогда не бывает пустой.",
  "За твои объятия, моё любимое безопасное место.",
  "За тепло твоих рук.",
  "За твой родной запах, который для меня пахнет домом.",
  "За сообщения от тебя, после которых на душе теплее.",
  "За то, как по-особенному звучит моё имя в твоём голосе.",
  "За твоё серьёзное лицо, когда ты на чём-то сосредоточена.",
  "За то, как сияют твои глаза, когда ты улыбаешься.",
  "За смелость быть уязвимой рядом со мной.",
  "За силу, которой в тебе намного больше, чем ты думаешь.",
  "За собственное мнение и характер.",
  "За желание узнавать новое.",
  "За то, что рядом с тобой мне хочется становиться лучше.",
  "За напоминания о том, что действительно важно.",
  "За то, как ты заботишься о близких.",
  "За твою способность чувствовать других людей.",
  "За умение прощать.",
  "За шанс всё исправить, когда я ошибаюсь.",
  "За то, что ты не сдаёшься в том, что для тебя важно.",
  "За готовность говорить даже о сложном.",
  "За настоящую тебя: не идеальную картинку, а живого человека.",
  "За все воспоминания, которые у нас уже есть.",
  "За наши случайные и самые честные фотографии.",
  "За прогулки, во время которых время исчезает.",
  "За уютные вечера вдвоём.",
  "За шутки, которые понимаем только мы.",
  "За наши планы на будущее.",
  "За то, что ты умеешь сделать особенным любое место.",
  "За ощущение дома, когда ты рядом.",
  "За то, что с тобой день становится наполненным.",
  "За часы рядом, которые пролетают как минуты.",
  "За предвкушение каждой нашей встречи.",
  "За то, что по тебе можно так сильно скучать.",
  "За желание беречь то, что у нас есть.",
  "За то, что ты учишь меня подтверждать любовь поступками.",
  "За внимание к деталям.",
  "За способность удивлять меня снова и снова.",
  "За то, что каждый день я открываю в тебе что-то новое.",
  "За спокойствие, которое ты умеешь мне дарить.",
  "За твою живость и настоящие эмоции.",
  "За нежность в твоих движениях.",
  "За уверенность, с которой ты идёшь к своей цели.",
  "За то, как мило ты иногда смущаешься.",
  "За твоё очаровательное ворчание.",
  "За твой неповторимый стиль.",
  "За твой вкус и чувство прекрасного.",
  "За каждый кадр, который хочется сохранить.",
  "За красоту в тебе, когда ты просто живёшь и не позируешь.",
  "За тот кадр у воды, где ты будто держишь целое небо.",
  "За смелость мечтать по-крупному.",
  "За умение замечать красоту вокруг.",
  "За твоё любопытство к миру.",
  "За вдумчивость и глубину.",
  "За доверие, которое ты мне даришь.",
  "За то, что принимаешь меня настоящего.",
  "За то, что помогаешь мне быть честнее с собой.",
  "За то, что не позволяешь мне опускать руки.",
  "За вызовы, благодаря которым я расту.",
  "За то, как искренне ты радуешься моим победам.",
  "За то, что остаёшься рядом в непростые дни.",
  "За каждое наше искреннее примирение.",
  "За то, что чувствуешь, когда меня нужно просто обнять.",
  "За то, что понимаешь, когда мне нужно немного тишины.",
  "За сочетание взрослой мудрости и детской непосредственности.",
  "За твою спонтанность.",
  "За твоё прекрасное чувство юмора.",
  "За то, что каждое наше свидание становится отдельной историей.",
  "За наш собственный язык из взглядов, слов и жестов.",
  "За песни, которые теперь навсегда звучат как «мы».",
  "За все наши «а помнишь?», от которых хочется улыбаться.",
  "За то, что рядом с тобой неизвестное будущее не пугает.",
  "За желание однажды просыпаться рядом с тобой каждый день.",
  "За мечту вместе стать старше, сохранив нашу нежность.",
  "За то, что я могу выбирать тебя снова каждый день.",
  "За любовь, которую невозможно уместить ни в один список.",
  "За то, что моё сердце узнаёт тебя и становится спокойнее.",
  "За то, что ты Настя. Моя любимая и единственная.",
];

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
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
  themeColor.content = theme === "dark" ? "#171214" : "#fff8f4";

  if (save) {
    try {
      localStorage.setItem("nastya-theme", theme);
    } catch {
      // Тема всё равно переключится, даже если браузер запретил сохранение.
    }
  }
};

setTheme(root.dataset.theme || "light");

themeButton.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener?.("change", (event) => {
  if (!hasSavedTheme()) {
    setTheme(event.matches ? "dark" : "light");
  }
});

const reasonsList = document.querySelector("#reasons-list");
const reasonsFragment = document.createDocumentFragment();

reasons.forEach((reason) => {
  const item = document.createElement("li");
  item.textContent = reason;
  reasonsFragment.append(item);
});

reasonsList.append(reasonsFragment);

const revealItems = document.querySelectorAll(
  ".section, .promise-card, .path-step, .tile, .video-frame, .ritual-photo, .ritual, .eyes-photo, .eyes-copy, .future-photo, .future-card"
);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const immersiveShell = document.querySelector("#immersive-experience");
const immersiveStage = immersiveShell?.querySelector(".immersive-stage");
const immersiveScenes = immersiveShell
  ? Array.from(immersiveShell.querySelectorAll(".immersive-scene"))
  : [];
const immersiveProgressFill = immersiveShell?.querySelector(".immersive-progress-fill");
const immersiveCounterCurrent = immersiveShell?.querySelector(".immersive-counter-current");
const immersiveExit = immersiveShell?.querySelector(".immersive-exit");
const mode3dButton = document.querySelector(".mode-3d-toggle");
const classicMain = document.querySelector("main");
const classicFooter = document.querySelector(".footer");
const immersiveImages = immersiveShell
  ? Array.from(immersiveShell.querySelectorAll("img"))
  : [];
let classicScrollY = window.scrollY;
let immersiveFrame = 0;
let immersiveTargetProgress = 0;
let immersiveRenderedProgress = 0;
let immersiveLastFrameTime = 0;
let immersiveHasRendered = false;
let immersiveWarmupPromise = null;
let pointerFrame = 0;
let pointerX = 0;
let pointerY = 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const isImmersiveActive = () => document.body.classList.contains("immersive-active");

const warmImmersiveImages = () => {
  if (immersiveWarmupPromise) return immersiveWarmupPromise;

  immersiveImages.forEach((image) => {
    image.loading = "eager";
  });

  immersiveWarmupPromise = Promise.allSettled(
    immersiveImages.map((image) => image.decode?.() ?? Promise.resolve())
  );

  return immersiveWarmupPromise;
};

const renderImmersiveProgress = (progress) => {
  if (!immersiveStage || immersiveScenes.length === 0) return;

  const scenePosition = progress * (immersiveScenes.length - 1);
  const activeScene = clamp(Math.round(scenePosition), 0, immersiveScenes.length - 1);

  immersiveStage.style.setProperty("--story-progress", progress.toFixed(5));
  immersiveStage.style.setProperty("--story-drift", `${((progress - 0.5) * 18).toFixed(3)}vw`);
  immersiveStage.style.setProperty("--story-turn", `${((progress - 0.5) * 8).toFixed(3)}deg`);
  immersiveProgressFill?.style.setProperty("transform", `scaleY(${progress})`);
  if (immersiveCounterCurrent) {
    immersiveCounterCurrent.textContent = String(activeScene + 1).padStart(2, "0");
  }
  immersiveStage.dataset.activeScene = String(activeScene);

  immersiveScenes.forEach((scene, index) => {
    const distance = index - scenePosition;
    const absoluteDistance = Math.abs(distance);
    const sceneFadeRange = 0.94;
    const opacity = absoluteDistance >= sceneFadeRange
      ? 0
      : Math.pow(Math.cos((absoluteDistance / sceneFadeRange) * Math.PI * 0.5), 0.82);
    const presence = clamp(1 - absoluteDistance / sceneFadeRange, 0, 1);
    const scale = clamp(1 - absoluteDistance * 0.048, 0.92, 1);

    scene.style.setProperty("--scene-opacity", opacity.toFixed(4));
    scene.style.setProperty("--scene-presence", presence.toFixed(4));
    scene.style.setProperty("--scene-distance", distance.toFixed(4));
    scene.style.setProperty("--scene-y", `${(distance * 22).toFixed(3)}vh`);
    scene.style.setProperty("--scene-z", `${(-absoluteDistance * 290).toFixed(2)}px`);
    scene.style.setProperty("--scene-rotate-x", `${(-distance * 3.2).toFixed(3)}deg`);
    scene.style.setProperty("--scene-scale", scale.toFixed(4));
    scene.style.setProperty("--scene-card-shift", `${(-distance * 46).toFixed(2)}px`);
    scene.style.zIndex = String(60 - Math.round(absoluteDistance * 10));

    const isCurrent = index === activeScene;
    scene.classList.toggle("is-current", isCurrent);
    scene.classList.toggle("is-nearby", absoluteDistance < 1.08);
    scene.setAttribute("aria-hidden", String(!isCurrent));
  });
};

const updateImmersiveProgress = (timestamp = performance.now()) => {
  immersiveFrame = 0;
  if (!isImmersiveActive() || !immersiveShell || !immersiveStage || immersiveScenes.length === 0) return;

  const scrollRange = Math.max(1, immersiveShell.offsetHeight - window.innerHeight);
  immersiveTargetProgress = clamp(window.scrollY / scrollRange, 0, 1);

  if (!immersiveHasRendered) {
    immersiveRenderedProgress = immersiveTargetProgress;
    immersiveHasRendered = true;
  } else {
    const elapsed = clamp(timestamp - (immersiveLastFrameTime || timestamp - 16.67), 0, 48);
    const follow = 1 - Math.exp(-elapsed / (reduceMotion ? 70 : 105));
    immersiveRenderedProgress += (immersiveTargetProgress - immersiveRenderedProgress) * follow;
  }

  immersiveLastFrameTime = timestamp;
  renderImmersiveProgress(immersiveRenderedProgress);

  if (Math.abs(immersiveTargetProgress - immersiveRenderedProgress) > 0.00004) {
    immersiveFrame = requestAnimationFrame(updateImmersiveProgress);
  }
};

const scheduleImmersiveProgress = () => {
  if (!immersiveFrame && isImmersiveActive()) {
    immersiveFrame = requestAnimationFrame(updateImmersiveProgress);
  }
};

const updateImmersivePointer = () => {
  pointerFrame = 0;
  if (!immersiveStage || reduceMotion || !isImmersiveActive()) return;

  immersiveStage.style.setProperty("--near-x", `${(pointerX * -34).toFixed(2)}px`);
  immersiveStage.style.setProperty("--near-y", `${(pointerY * -24).toFixed(2)}px`);
  immersiveStage.style.setProperty("--mid-x", `${(pointerX * -17).toFixed(2)}px`);
  immersiveStage.style.setProperty("--mid-y", `${(pointerY * -12).toFixed(2)}px`);
  immersiveStage.style.setProperty("--far-x", `${(pointerX * 10).toFixed(2)}px`);
  immersiveStage.style.setProperty("--far-y", `${(pointerY * 7).toFixed(2)}px`);
};

const scheduleImmersivePointer = () => {
  if (!pointerFrame) {
    pointerFrame = requestAnimationFrame(updateImmersivePointer);
  }
};

const setClassicContentInert = (inert) => {
  if (classicMain) classicMain.inert = inert;
  if (classicFooter) classicFooter.inert = inert;
};

const enterImmersiveMode = () => {
  if (!immersiveShell || !mode3dButton || isImmersiveActive()) return;

  classicScrollY = window.scrollY;
  root.classList.add("immersive-scrolling");
  immersiveShell.hidden = false;
  immersiveShell.removeAttribute("aria-hidden");
  setClassicContentInert(true);
  document.body.classList.add("immersive-active");
  document.querySelector(".site-header")?.classList.remove("is-hidden");
  mode3dButton.setAttribute("aria-pressed", "true");
  mode3dButton.setAttribute("aria-label", "Выключить 3D-фотоисторию");
  mode3dButton.title = "Вернуться к обычному сайту";
  themeColor.content = "#090709";
  immersiveHasRendered = false;
  immersiveLastFrameTime = 0;
  warmImmersiveImages();

  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    updateImmersiveProgress();
    mode3dButton.focus({ preventScroll: true });
  });
};

const exitImmersiveMode = () => {
  if (!immersiveShell || !mode3dButton || !isImmersiveActive()) return;

  document.body.classList.remove("immersive-active");
  cancelAnimationFrame(immersiveFrame);
  immersiveFrame = 0;
  immersiveShell.hidden = true;
  immersiveShell.setAttribute("aria-hidden", "true");
  setClassicContentInert(false);
  mode3dButton.setAttribute("aria-pressed", "false");
  mode3dButton.setAttribute("aria-label", "Включить 3D-фотоисторию");
  mode3dButton.title = "Включить 3D-фотоисторию";
  setTheme(root.dataset.theme || "light");
  window.scrollTo(0, classicScrollY);
  requestAnimationFrame(() => root.classList.remove("immersive-scrolling"));
  mode3dButton.focus({ preventScroll: true });
};

mode3dButton?.addEventListener("click", () => {
  if (isImmersiveActive()) {
    exitImmersiveMode();
  } else {
    enterImmersiveMode();
  }
});

mode3dButton?.addEventListener("pointerenter", warmImmersiveImages, { once: true });
mode3dButton?.addEventListener("focus", warmImmersiveImages, { once: true });

immersiveExit?.addEventListener("click", exitImmersiveMode);

window.addEventListener("scroll", scheduleImmersiveProgress, { passive: true });
window.addEventListener("resize", scheduleImmersiveProgress, { passive: true });
window.visualViewport?.addEventListener("resize", scheduleImmersiveProgress, { passive: true });

window.addEventListener(
  "pointermove",
  (event) => {
    if (reduceMotion || !isImmersiveActive()) return;
    pointerX = clamp(event.clientX / Math.max(window.innerWidth, 1) - 0.5, -0.5, 0.5);
    pointerY = clamp(event.clientY / Math.max(window.innerHeight, 1) - 0.5, -0.5, 0.5);
    scheduleImmersivePointer();
  },
  { passive: true }
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isImmersiveActive()) {
    exitImmersiveMode();
  }
});

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  let lastTouchY = null;
  let lastSettledY = window.scrollY;

  const setHeaderHidden = (hidden) => {
    siteHeader.classList.toggle("is-hidden", hidden);
  };

  const reactToScrollIntent = (deltaY) => {
    if (isImmersiveActive()) {
      setHeaderHidden(false);
      return;
    }

    const projectedScroll = window.scrollY + Math.max(deltaY, 0);

    if (projectedScroll < 96 || deltaY < -4) {
      setHeaderHidden(false);
      return;
    }

    if (deltaY > 6 && !siteHeader.contains(document.activeElement)) {
      setHeaderHidden(true);
    }
  };

  document.addEventListener(
    "wheel",
    (event) => reactToScrollIntent(event.deltaY),
    { passive: true }
  );

  document.addEventListener(
    "touchstart",
    (event) => {
      lastTouchY = event.touches[0]?.clientY ?? null;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      const currentTouchY = event.touches[0]?.clientY;
      if (lastTouchY === null || currentTouchY === undefined) return;

      reactToScrollIntent(lastTouchY - currentTouchY);
      lastTouchY = currentTouchY;
    },
    { passive: true }
  );

  document.addEventListener("touchend", () => {
    lastTouchY = null;
  });

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;

    const downKeys = new Set(["ArrowDown", "PageDown", "End", " "]);
    const upKeys = new Set(["ArrowUp", "PageUp", "Home"]);

    if (downKeys.has(event.key)) {
      requestAnimationFrame(() => reactToScrollIntent(24));
    } else if (upKeys.has(event.key)) {
      requestAnimationFrame(() => reactToScrollIntent(-24));
    }
  });

  document.addEventListener("scrollend", () => {
    const currentScrollY = window.scrollY;
    reactToScrollIntent(currentScrollY - lastSettledY);
    lastSettledY = currentScrollY;
  });

  siteHeader.addEventListener("focusin", () => setHeaderHidden(false));

  document.querySelectorAll('.site-header a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => setHeaderHidden(false));
  });
}

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 60}ms`);
});

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const reasonsButton = document.querySelector(".heart-button");
const reasonsDialog = document.querySelector("#reasons-dialog");

reasonsButton.addEventListener("click", () => {
  if (typeof reasonsDialog.showModal === "function") {
    reasonsDialog.showModal();
  } else {
    reasonsDialog.setAttribute("open", "");
  }
});

reasonsDialog.addEventListener("click", (event) => {
  if (event.target === reasonsDialog) {
    reasonsDialog.close();
  }
});

const photoDialog = document.querySelector("#photo-dialog");
const photoDialogImage = document.querySelector("#photo-dialog-image");
const photoTitle = document.querySelector("#photo-title");
const photoDescription = document.querySelector("#photo-description");
const photoTargets = document.querySelectorAll(
  ".hero-media, .split-photo, .eyes-photo, .future-photo, .tile, .ritual-photo"
);
const photoTogether = document.querySelector(".photo-together");

const photoMessages = {
  "photo-01.png": "Обнимать тебя в кадре и в жизни, моя любимая привычка.",
  "photo-02.png": "С тобой даже самые смешные селфи становятся нашими маленькими сокровищами.",
  "photo-03.png": "Один взгляд, а в нём целая история, которую мне хочется читать бесконечно.",
  "photo-04.png": "Просто мы рядом, и в этом уже столько настоящего счастья.",
  "photo-05.png": "В этом отражении мы такие настоящие: немного смешные, очень родные и вместе.",
  "photo-06.png": "Будто кадр из кино, в котором я всегда хочу быть рядом с тобой.",
  "photo-07.png": "В твоих объятиях всегда легче, тише и по-настоящему спокойно.",
  "photo-08.png": "С этого кадра начинается ещё одна страница нашей тихой и настоящей истории.",
  "photo-09.png": "Ты такая милая, что мне хочется беречь каждую твою улыбку.",
  "photo-13.png": "Немного зимы, немного света и целый наш маленький мир.",
  "photo-14.jpg": "Лето рядом с тобой пахнет солнцем, свободой и счастьем.",
  "photo-15.jpg": "Твой солнечный смех делает мой день самым тёплым.",
  "photo-16.jpg": "Ты у моря, а у меня в сердце снова становится светлее.",
  "ritual-night.jpg": "Даже в полумраке я узнаю самое важное: нас, близость и тепло этого момента.",
  "nastya-eyes.jpg": "В твоём взгляде столько тепла, что я каждый раз будто возвращаюсь домой.",
  "me.jpg": "В твоём взгляде столько тепла, что рядом с тобой я каждый раз будто возвращаюсь домой.",
  "nastya-river.jpg": "Ты тянешься к небу, а мне хочется быть рядом во всех твоих больших мечтах.",
};

const getPhotoMemory = (target) => {
  const image = target.querySelector("img");
  const caption = target.querySelector("figcaption")?.textContent.trim();
  const alt = image?.alt?.trim();
  const isHero = target.classList.contains("hero-media");
  const filename = image?.getAttribute("src")?.split("/").pop();

  return {
    src: image?.currentSrc || image?.src || "",
    alt: alt || "Наше любимое воспоминание",
    title: caption || (isHero ? "Настя, я выбираю нас" : "Наш любимый момент"),
    description:
      alt ||
      (isHero
        ? "Кадр, с которого начинается этот маленький сайт о нас."
        : "Тот самый момент, к которому хочется возвращаться снова и снова."),
    message:
      photoMessages[filename] ||
      "Мне так спокойно и хорошо рядом с тобой. Пусть таких моментов будет ещё много.",
  };
};

const openPhotoMemory = (target) => {
  const memory = getPhotoMemory(target);
  photoDialogImage.src = memory.src;
  photoDialogImage.alt = memory.alt;
  photoTitle.textContent = memory.title;
  photoDescription.textContent = memory.description;
  photoTogether.textContent = memory.message;

  if (typeof photoDialog.showModal === "function") {
    photoDialog.showModal();
  } else {
    photoDialog.setAttribute("open", "");
  }
};

photoTargets.forEach((target) => {
  const memory = getPhotoMemory(target);

  target.classList.add("photo-trigger");
  target.setAttribute("role", "button");
  target.setAttribute("tabindex", "0");
  target.setAttribute("aria-haspopup", "dialog");
  target.setAttribute("aria-label", `Открыть воспоминание: ${memory.title}. ${memory.description}`);

  target.addEventListener("click", () => openPhotoMemory(target));
  target.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPhotoMemory(target);
    }
  });
});

photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) {
    photoDialog.close();
  }
});
