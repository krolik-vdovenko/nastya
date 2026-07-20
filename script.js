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
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const immersiveFlatMode = window.matchMedia("(max-width: 900px), (hover: none), (pointer: coarse)");

const immersiveShell = document.querySelector("#immersive-experience");
const immersiveStage = immersiveShell?.querySelector(".immersive-stage");
const immersiveScenes = immersiveShell
  ? Array.from(immersiveShell.querySelectorAll(".immersive-scene"))
  : [];
const immersiveScenePhotos = immersiveScenes.map((scene) =>
  Array.from(scene.querySelectorAll(".orbit-photo"))
);
const immersivePhotoDirections = immersiveScenePhotos.map((photos) =>
  photos.map((photo, photoIndex) => {
    const anchor = Number.parseFloat(photo.style.getPropertyValue("--x"));

    if (Number.isFinite(anchor)) return anchor < 35 ? -1 : 1;
    return photoIndex === 0 ? -1 : 1;
  })
);
// Selected chapters deliberately let their cards cross paths. The near card
// is lifted toward the camera during the pass so it covers the other card as
// one solid surface instead of letting two transformed planes intersect.
const immersivePassScenes = new Set([0, 2, 3, 6]);
const immersiveProgressFill = immersiveShell?.querySelector(".immersive-progress-fill");
const immersiveCounterCurrent = immersiveShell?.querySelector(".immersive-counter-current");
const immersiveCounterTotal = immersiveShell?.querySelector(".immersive-counter-total");
const immersiveExit = immersiveShell?.querySelector(".immersive-exit");
const heartIntro = immersiveShell?.querySelector(".heart-intro");
const heartIntroCanvas = heartIntro?.querySelector(".heart-intro-canvas");
const heartIntroContext = heartIntroCanvas?.getContext("2d", { alpha: true });
let heartHandsReady = false;
let heartHandsWarmupPromise = null;
const heartHandsImage = new Image();
heartHandsImage.decoding = "async";
const heartHandsClosedImage = new Image();
heartHandsClosedImage.decoding = "async";
const heartHandsImages = [heartHandsImage, heartHandsClosedImage];
const heartHandsSources = [
  "assets/heart-hands-v2.webp",
  "assets/heart-hands-closed-v2.webp",
];
const isHeartHandsImageReady = (image) => image.complete && image.naturalWidth > 0;
const updateHeartHandsReady = () => {
  heartHandsReady = heartHandsImages.every(isHeartHandsImageReady);
};
heartHandsImages.forEach((image) => {
  image.addEventListener("load", updateHeartHandsReady, { once: true });
});
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
let immersiveEntryPending = false;
let immersiveStageHeight = 1;
let immersiveScrollRange = 1;
let immersiveMetricWidth = 0;
let immersiveActiveScene = -1;
let pointerFrame = 0;
let pointerX = 0;
let pointerY = 0;
let heartIntroFrame = 0;
let heartIntroTimer = 0;
let heartIntroRun = 0;
let heartIntroResolve = null;
let immersiveEntryToken = 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const smoothstep = (start, end, value) => {
  const normalized = clamp((value - start) / (end - start), 0, 1);
  return normalized * normalized * (3 - 2 * normalized);
};
const isImmersiveActive = () => document.body.classList.contains("immersive-active");
const setInlineProperty = (element, property, value) => {
  if (element.style.getPropertyValue(property) !== value) {
    element.style.setProperty(property, value);
  }
};

const flightVector = (x, y, z, rotateX, rotateY, rotateZ, scale = 0) => ({
  x,
  y,
  z,
  rotateX,
  rotateY,
  rotateZ,
  scale,
});

// Each chapter has its own camera path. The values are viewport-relative so
// reversing the scroll retraces the exact same route without class-driven jumps.
const immersiveFlightProfiles = [
  {
    enter: {
      scene: flightVector(0, 0.08, -300, -5, 0, -1, -0.07),
      photos: [
        flightVector(-0.36, 0.08, -220, 2, 18, -12, -0.1),
        flightVector(0.32, -0.07, 180, -2, -16, 8, 0.05),
      ],
      cardShift: 18,
    },
    exit: {
      scene: flightVector(0, -0.1, 220, 5, 0, 1, 0.05),
      photos: [
        flightVector(0.22, -0.11, 240, -2, -13, 7, 0.07),
        flightVector(-0.27, 0.12, -190, 2, 15, -7, -0.08),
      ],
      cardShift: -14,
    },
  },
  {
    enter: {
      scene: flightVector(0.07, 0.02, -320, -2, -4, 1, -0.06),
      photos: [
        flightVector(-0.42, 0.02, 160, 0, 20, -7, 0.08),
        flightVector(0.4, -0.05, -130, 0, -18, 8, -0.06),
      ],
      cardShift: -10,
    },
    exit: {
      scene: flightVector(-0.08, -0.03, 210, 2, 4, -1, 0.04),
      photos: [
        flightVector(0.34, -0.07, -170, 0, -16, 7, -0.06),
        flightVector(-0.36, 0.09, 150, 0, 18, -8, 0.07),
      ],
      cardShift: 12,
    },
  },
  {
    enter: {
      scene: flightVector(-0.04, 0.08, -280, -4, 3, -2, -0.07),
      photos: [
        flightVector(0.18, -0.32, 210, -10, -12, -14, 0.1),
        flightVector(-0.28, 0.36, -190, 8, 16, 18, -0.09),
      ],
      cardShift: 8,
    },
    exit: {
      scene: flightVector(0.05, -0.08, 230, 4, -3, 2, 0.05),
      photos: [
        flightVector(-0.32, 0.28, -180, 10, 12, 12, -0.08),
        flightVector(0.34, -0.27, 190, -8, -15, -16, 0.08),
      ],
      cardShift: -8,
    },
  },
  {
    enter: {
      scene: flightVector(0.05, -0.02, -300, 2, -4, 2, -0.06),
      photos: [
        flightVector(0.34, 0.18, -130, 2, -22, 14, -0.05),
        flightVector(-0.36, -0.14, 200, -2, 20, -16, 0.08),
      ],
      cardShift: 6,
    },
    exit: {
      scene: flightVector(-0.05, 0.03, 220, -2, 4, -2, 0.04),
      photos: [
        flightVector(-0.3, -0.18, 210, -2, 18, -12, 0.08),
        flightVector(0.28, 0.22, -170, 2, -18, 14, -0.07),
      ],
      cardShift: -6,
    },
  },
  {
    enter: {
      scene: flightVector(0, 0.06, -340, -5, 0, 0, -0.08),
      photos: [
        flightVector(0, 0.24, 330, 10, 0, -3, 0.13),
        flightVector(0.39, -0.18, -230, -4, -18, 12, -0.1),
      ],
      cardShift: 0,
    },
    exit: {
      scene: flightVector(0, -0.07, 260, 4, 0, 0, 0.06),
      photos: [
        flightVector(0, -0.19, 360, -8, 0, 3, 0.16),
        flightVector(-0.42, 0.2, -250, 4, 18, -12, -0.1),
      ],
      cardShift: 0,
    },
  },
  {
    enter: {
      scene: flightVector(0.1, 0.01, -280, 0, -5, 1, -0.06),
      photos: [
        flightVector(0.45, 0.02, 170, 0, -13, 5, 0.05),
        flightVector(0.54, 0.14, -190, 0, -18, 10, -0.08),
      ],
      cardShift: -4,
    },
    exit: {
      scene: flightVector(-0.11, -0.01, 220, 0, 5, -1, 0.04),
      photos: [
        flightVector(-0.42, -0.03, 170, 0, 13, -5, 0.05),
        flightVector(-0.5, -0.12, -170, 0, 18, -10, -0.07),
      ],
      cardShift: 4,
    },
  },
  {
    enter: {
      scene: flightVector(-0.03, 0.06, -300, -3, 3, -2, -0.07),
      photos: [
        flightVector(-0.3, 0.3, 190, 8, 18, -18, 0.08),
        flightVector(0.34, -0.24, -130, -7, -20, 20, -0.07),
      ],
      cardShift: 10,
    },
    exit: {
      scene: flightVector(0.04, -0.06, 230, 3, -3, 2, 0.05),
      photos: [
        flightVector(0.38, -0.24, -110, -8, -16, 16, -0.06),
        flightVector(-0.36, 0.3, 170, 7, 18, -18, 0.08),
      ],
      cardShift: -10,
    },
  },
  {
    enter: {
      scene: flightVector(0, 0.04, -320, -3, 0, 0, -0.07),
      photos: [
        flightVector(-0.38, 0.08, -230, 0, 16, -10, -0.09),
        flightVector(0.36, -0.06, 230, 0, -16, 10, 0.09),
      ],
      cardShift: 0,
    },
    exit: {
      scene: flightVector(0, -0.03, 160, 2, 0, 0, 0.03),
      photos: [
        flightVector(-0.2, -0.06, -120, 0, 10, -5, -0.04),
        flightVector(0.2, 0.06, 120, 0, -10, 5, 0.04),
      ],
      cardShift: 0,
    },
  },
];

const applyImmersiveFlight = (scene, sceneIndex, distance, stageHeight, flatMode) => {
  const profile = immersiveFlightProfiles[sceneIndex % immersiveFlightProfiles.length];
  const route = distance >= 0 ? profile.enter : profile.exit;
  const travel = Math.pow(clamp(Math.abs(distance), 0, 1), 0.86);
  const viewportWidth = Math.max(320, immersiveMetricWidth || window.innerWidth);
  const horizontalScale = viewportWidth * (flatMode ? 0.34 : 1);
  const verticalScale = stageHeight * (flatMode ? 0.34 : 1);
  const rotationScale = flatMode ? 0.28 : 1;
  const sceneVector = route.scene;

  setInlineProperty(scene, "--scene-x", `${(sceneVector.x * horizontalScale * travel).toFixed(2)}px`);
  setInlineProperty(scene, "--scene-y", `${(sceneVector.y * verticalScale * travel).toFixed(2)}px`);
  setInlineProperty(scene, "--scene-z", `${(flatMode ? 0 : sceneVector.z * travel).toFixed(2)}px`);
  setInlineProperty(scene, "--scene-rotate-x", `${(flatMode ? 0 : sceneVector.rotateX * travel).toFixed(3)}deg`);
  setInlineProperty(scene, "--scene-rotate-y", `${(flatMode ? 0 : sceneVector.rotateY * travel).toFixed(3)}deg`);
  setInlineProperty(scene, "--scene-rotate-z", `${(sceneVector.rotateZ * rotationScale * travel).toFixed(3)}deg`);
  setInlineProperty(
    scene,
    "--scene-scale",
    (flatMode ? 1 : clamp(1 + sceneVector.scale * travel, 0.88, 1.1)).toFixed(4)
  );
  setInlineProperty(
    scene,
    "--scene-card-shift",
    `${(reduceMotion ? 0 : route.cardShift * travel * (flatMode ? 0.45 : 1)).toFixed(2)}px`
  );

  immersiveScenePhotos[sceneIndex]?.forEach((photo, photoIndex) => {
    const vector = route.photos[photoIndex] || route.photos[route.photos.length - 1];
    const mobilePhotoScale = flatMode ? 0.46 : 1;
    const horizontalDirection = immersivePhotoDirections[sceneIndex]?.[photoIndex] ?? 1;
    const outwardFlight = Math.abs(vector.x) * horizontalDirection;
    const usesCleanPass = !flatMode && immersivePassScenes.has(sceneIndex);
    const isForeground = photo.classList.contains("is-near");
    const passProgress = usesCleanPass ? smoothstep(0.08, 0.72, travel) : 0;
    const passDepth = passProgress * (isForeground ? 320 : -72);
    const horizontalFlight = usesCleanPass ? vector.x : outwardFlight;
    const depthFlight = flatMode ? 0 : vector.z * travel * 1.22 + passDepth;

    setInlineProperty(photo, "--photo-flight-x", `${(horizontalFlight * horizontalScale * travel).toFixed(2)}px`);
    setInlineProperty(photo, "--photo-flight-y", `${(vector.y * verticalScale * travel).toFixed(2)}px`);
    setInlineProperty(photo, "--photo-flight-z", `${depthFlight.toFixed(2)}px`);
    setInlineProperty(photo, "--photo-flight-rx", `${(flatMode ? 0 : vector.rotateX * travel).toFixed(3)}deg`);
    setInlineProperty(photo, "--photo-flight-ry", `${(flatMode ? 0 : vector.rotateY * travel).toFixed(3)}deg`);
    setInlineProperty(photo, "--photo-layer", String(isForeground ? 6 : photo.classList.contains("is-far") ? 1 : 3));
    setInlineProperty(photo, "--photo-pass", passProgress.toFixed(4));
    setInlineProperty(
      photo,
      "--photo-flight-rz",
      `${(vector.rotateZ * rotationScale * mobilePhotoScale * travel).toFixed(3)}deg`
    );
    setInlineProperty(
      photo,
      "--photo-flight-scale",
      (flatMode ? 1 : clamp(1 + vector.scale * travel, 0.84, 1.16)).toFixed(4)
    );
  });
};

immersiveScenes.forEach((scene, index) => {
  scene.style.zIndex = String(index + 10);
});

if (immersiveCounterTotal) {
  immersiveCounterTotal.textContent = String(immersiveScenes.length).padStart(2, "0");
}

const setImmersiveExitReady = (ready) => {
  if (!immersiveExit) return;

  immersiveExit.classList.toggle("is-visible", ready);
  immersiveExit.disabled = !ready;
  immersiveExit.tabIndex = ready ? 0 : -1;
  immersiveExit.setAttribute("aria-hidden", String(!ready));
};

setImmersiveExitReady(false);

const warmHeartHands = () => {
  if (heartHandsReady) return Promise.resolve();
  if (heartHandsWarmupPromise) return heartHandsWarmupPromise;

  heartHandsImages.forEach((image, index) => {
    if (!image.src) image.src = heartHandsSources[index];
  });
  heartHandsWarmupPromise = Promise.allSettled(
    heartHandsImages.map((image) => image.decode?.() ?? Promise.resolve())
  ).then(updateHeartHandsReady);
  return heartHandsWarmupPromise;
};

const warmImmersiveImages = () => {
  if (immersiveWarmupPromise) return immersiveWarmupPromise;

  immersiveImages.forEach((image) => {
    image.loading = "eager";
  });

  immersiveWarmupPromise = Promise.allSettled([
    ...immersiveImages.map((image) => image.decode?.() ?? Promise.resolve()),
  ]);

  return immersiveWarmupPromise;
};

const refreshImmersiveMetrics = (force = false) => {
  if (!immersiveShell || !immersiveStage) return;

  const viewportWidth = Math.round(window.innerWidth);
  const mobileToolbarOnlyResize =
    !force &&
    immersiveFlatMode.matches &&
    immersiveScrollRange > 1 &&
    Math.abs(viewportWidth - immersiveMetricWidth) < 2;

  if (mobileToolbarOnlyResize) return;

  immersiveMetricWidth = viewportWidth;
  immersiveStageHeight = Math.max(1, immersiveStage.clientHeight);
  immersiveScrollRange = Math.max(1, immersiveShell.offsetHeight - immersiveStageHeight);
};

const renderImmersiveProgress = (progress, stageHeight) => {
  if (!immersiveStage || immersiveScenes.length === 0) return;

  const scenePosition = progress * (immersiveScenes.length - 1);
  let activeScene = clamp(Math.round(scenePosition), 0, immersiveScenes.length - 1);
  if (immersiveActiveScene >= 0 && Math.abs(scenePosition - immersiveActiveScene) < 0.6) {
    activeScene = immersiveActiveScene;
  }
  const activeSceneChanged = activeScene !== immersiveActiveScene;
  const flatMode = immersiveFlatMode.matches;

  if (!flatMode) {
    setInlineProperty(immersiveStage, "--story-drift", `${((progress - 0.5) * 18).toFixed(3)}vw`);
    setInlineProperty(immersiveStage, "--story-turn", `${((progress - 0.5) * 8).toFixed(3)}deg`);
  }
  immersiveProgressFill?.style.setProperty("transform", `scaleY(${progress})`);
  if (activeSceneChanged) {
    if (immersiveCounterCurrent) {
      immersiveCounterCurrent.textContent = String(activeScene + 1).padStart(2, "0");
    }
    immersiveStage.dataset.activeScene = String(activeScene);
    setImmersiveExitReady(activeScene === immersiveScenes.length - 1);
    immersiveActiveScene = activeScene;
  }

  immersiveScenes.forEach((scene, index) => {
    const distance = index - scenePosition;
    const absoluteDistance = Math.abs(distance);
    const isNearby = absoluteDistance < 1.08;

    // Give every photo room to leave before the next one arrives. The signed
    // distance keeps the same exit-then-entrance rhythm when scrolling back up.
    const presence = distance < 0
      ? 1 - smoothstep(0.08, 0.58, absoluteDistance)
      : 1 - smoothstep(0, 0.4, absoluteDistance);
    const opacity = presence > 0.985 ? 1 : Math.pow(presence, 0.82);
    const copyWindow = clamp((presence - 0.48) / 0.52, 0, 1);
    const copyPresence = copyWindow * copyWindow * (3 - 2 * copyWindow);
    const whisperPresence = Math.pow(presence, 2.2);

    setInlineProperty(scene, "--scene-opacity", opacity.toFixed(4));
    setInlineProperty(scene, "--scene-presence", presence.toFixed(4));
    setInlineProperty(scene, "--scene-copy-opacity", copyPresence.toFixed(4));
    setInlineProperty(scene, "--scene-whisper-opacity", whisperPresence.toFixed(4));

    if (isNearby) {
      applyImmersiveFlight(scene, index, reduceMotion ? 0 : distance, stageHeight, flatMode);
    }

    if (activeSceneChanged) {
      const isCurrent = index === activeScene;
      scene.classList.toggle("is-current", isCurrent);
      scene.setAttribute("aria-hidden", String(!isCurrent));
    }
    scene.classList.toggle("is-nearby", isNearby);
  });
};

const updateImmersiveProgress = (timestamp = performance.now()) => {
  immersiveFrame = 0;
  if (!isImmersiveActive() || !immersiveShell || !immersiveStage || immersiveScenes.length === 0) return;

  immersiveTargetProgress = clamp(window.scrollY / immersiveScrollRange, 0, 1);

  if (!immersiveHasRendered) {
    immersiveRenderedProgress = immersiveTargetProgress;
    immersiveHasRendered = true;
  } else {
    const elapsed = clamp(timestamp - (immersiveLastFrameTime || timestamp - 16.67), 0, 48);
    const follow = 1 - Math.exp(-elapsed / (reduceMotion ? 70 : 105));
    immersiveRenderedProgress += (immersiveTargetProgress - immersiveRenderedProgress) * follow;
  }

  immersiveLastFrameTime = timestamp;
  renderImmersiveProgress(immersiveRenderedProgress, immersiveStageHeight);

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
  immersiveStage.style.setProperty("--near-rx", `${(pointerY * 6).toFixed(3)}deg`);
  immersiveStage.style.setProperty("--near-ry", `${(pointerX * -8).toFixed(3)}deg`);
  immersiveStage.style.setProperty("--mid-rx", `${(pointerY * 3).toFixed(3)}deg`);
  immersiveStage.style.setProperty("--mid-ry", `${(pointerX * -4).toFixed(3)}deg`);
  immersiveStage.style.setProperty("--far-rx", `${(pointerY * -2).toFixed(3)}deg`);
  immersiveStage.style.setProperty("--far-ry", `${(pointerX * 3).toFixed(3)}deg`);
};

const scheduleImmersivePointer = () => {
  if (!pointerFrame) {
    pointerFrame = requestAnimationFrame(updateImmersivePointer);
  }
};

const resetImmersivePointer = () => {
  pointerX = 0;
  pointerY = 0;
  if (!immersiveStage) return;
  immersiveStage.style.setProperty("--near-x", "0px");
  immersiveStage.style.setProperty("--near-y", "0px");
  immersiveStage.style.setProperty("--mid-x", "0px");
  immersiveStage.style.setProperty("--mid-y", "0px");
  immersiveStage.style.setProperty("--far-x", "0px");
  immersiveStage.style.setProperty("--far-y", "0px");
  immersiveStage.style.setProperty("--near-rx", "0deg");
  immersiveStage.style.setProperty("--near-ry", "0deg");
  immersiveStage.style.setProperty("--mid-rx", "0deg");
  immersiveStage.style.setProperty("--mid-ry", "0deg");
  immersiveStage.style.setProperty("--far-rx", "0deg");
  immersiveStage.style.setProperty("--far-ry", "0deg");
};

const setClassicContentInert = (inert) => {
  if (classicMain) classicMain.inert = inert;
  if (classicFooter) classicFooter.inert = inert;
};

const heartBoundaryPoint = (angle) => {
  const sin = Math.sin(angle);
  const rawY =
    13 * Math.cos(angle) -
    5 * Math.cos(2 * angle) -
    2 * Math.cos(3 * angle) -
    Math.cos(4 * angle);

  return {
    x: (16 * sin * sin * sin) / 16.6,
    y: (-rawY / 17 - 0.35) * 1.08,
  };
};

const heartFragmentSeeds = [
  [-0.58, -0.5], [-0.22, -0.54], [0.2, -0.55], [0.57, -0.46],
  [-0.72, -0.16], [-0.34, -0.2], [0.02, -0.19], [0.38, -0.14], [0.72, -0.05],
  [-0.58, 0.18], [-0.2, 0.12], [0.22, 0.16], [0.55, 0.26],
  [-0.36, 0.45], [0.02, 0.42], [0.3, 0.51], [0, 0.7],
];

const createHeartMesh = (segments, rings) => {
  const vertices = [];
  const triangles = [];
  const groups = heartFragmentSeeds.map(([seedX, seedY], index) => {
    const seedAngle = Math.atan2(seedY, seedX || 0.001);
    const noise = Math.sin((index + 2) * 12.9898) * 0.5 + 0.5;
    const distance = 1.02 + noise * 0.78;
    const directionX = Math.cos(seedAngle + Math.sin(index * 1.37) * 0.16);
    const directionY = Math.sin(seedAngle + Math.sin(index * 1.37) * 0.16);

    return {
      index,
      seed: { x: seedX, y: seedY },
      center: { x: 0, y: 0, z: 0 },
      count: 0,
      offset: {
        x: directionX * distance + Math.sin(index * 3.11) * 0.16,
        y: directionY * distance * 0.9 + (index === 16 ? 0.62 : 0),
        z: (Math.sin(index * 5.31) * 0.5 + 0.5) * 1.42 - 0.62,
      },
      rotation: {
        x: (Math.sin(index * 2.17) * 0.5 + 0.5) * 1.45 - 0.725,
        y: (Math.sin(index * 4.73) * 0.5 + 0.5) * 1.7 - 0.85,
        z: (Math.sin(index * 7.11) * 0.5 + 0.5) * 1.9 - 0.95,
      },
      fractureOffset: {
        x: directionX * (0.032 + noise * 0.022),
        y: directionY * (0.028 + noise * 0.018),
        z: (Math.sin(index * 2.91) * 0.5 + 0.5) * 0.075,
      },
      arrival: ((index * 7) % heartFragmentSeeds.length) / heartFragmentSeeds.length,
      tone: Math.sin(index * 8.17) * 0.5 + 0.5,
    };
  });

  for (let ring = 0; ring <= rings; ring += 1) {
    const radius = ring / rings;
    for (let segment = 0; segment < segments; segment += 1) {
      const boundary = heartBoundaryPoint((segment / segments) * Math.PI * 2);
      const easedRadius = Math.pow(radius, 0.9);
      const x = boundary.x * easedRadius;
      const y = boundary.y * easedRadius;
      const leftLobe = Math.exp(-((x + 0.43) ** 2 / 0.19 + (y + 0.34) ** 2 / 0.17));
      const rightLobe = Math.exp(-((x - 0.43) ** 2 / 0.19 + (y + 0.34) ** 2 / 0.17));
      const body = Math.exp(-(x * x / 0.7 + (y - 0.06) ** 2 / 0.72));
      const notch = Math.exp(-(x * x / 0.035 + (y + 0.57) ** 2 / 0.07));
      vertices.push({
        x,
        y,
        z:
          0.055 +
          0.29 * Math.pow(1 - radius, 0.72) +
          0.22 * (leftLobe + rightLobe) +
          0.08 * body -
          0.11 * notch,
      });
    }
  }

  const findGroup = (center) => {
    let selected = 0;
    let selectedDistance = Infinity;
    groups.forEach((group, index) => {
      const dx = center.x - group.seed.x;
      const dy = center.y - group.seed.y;
      const distance = dx * dx + dy * dy * 1.08;
      if (distance < selectedDistance) {
        selectedDistance = distance;
        selected = index;
      }
    });
    return selected;
  };

  const addTriangle = (a, b, c, ring, side = false) => {
    const center = {
      x: (vertices[a].x + vertices[b].x + vertices[c].x) / 3,
      y: (vertices[a].y + vertices[b].y + vertices[c].y) / 3,
      z: (vertices[a].z + vertices[b].z + vertices[c].z) / 3,
    };
    const group = findGroup(center);
    const groupData = groups[group];

    groupData.center.x += center.x;
    groupData.center.y += center.y;
    groupData.center.z += center.z;
    groupData.count += 1;
    triangles.push({ a, b, c, group, side });
  };

  for (let ring = 1; ring <= rings; ring += 1) {
    for (let segment = 0; segment < segments; segment += 1) {
      const next = (segment + 1) % segments;
      const previousRing = ring - 1;
      const a = previousRing * segments + segment;
      const b = ring * segments + segment;
      const c = ring * segments + next;
      const d = previousRing * segments + next;

      addTriangle(a, b, c, ring);
      if (ring > 1) addTriangle(a, c, d, ring);
    }
  }

  const backStart = vertices.length;
  for (let segment = 0; segment < segments; segment += 1) {
    const boundary = heartBoundaryPoint((segment / segments) * Math.PI * 2);
    vertices.push({ x: boundary.x, y: boundary.y, z: -0.3 });
  }

  for (let segment = 0; segment < segments; segment += 1) {
    const next = (segment + 1) % segments;
    const frontA = rings * segments + segment;
    const frontB = rings * segments + next;
    const backA = backStart + segment;
    const backB = backStart + next;
    addTriangle(frontA, backA, backB, rings, true);
    addTriangle(frontA, backB, frontB, rings, true);
  }

  groups.forEach((group) => {
    const count = Math.max(group.count, 1);
    group.center.x /= count;
    group.center.y /= count;
    group.center.z /= count;
  });

  const edgeMap = new Map();
  triangles.forEach((triangle) => {
    if (triangle.side) return;
    [[triangle.a, triangle.b], [triangle.b, triangle.c], [triangle.c, triangle.a]].forEach(([a, b]) => {
      const key = a < b ? `${a}:${b}` : `${b}:${a}`;
      if (!edgeMap.has(key)) edgeMap.set(key, []);
      edgeMap.get(key).push({ a, b, group: triangle.group });
    });
  });

  const crackEdges = [];
  edgeMap.forEach((entries) => {
    if (entries.length !== 2 || entries[0].group === entries[1].group) return;
    crackEdges.push({
      a: entries[0].a,
      b: entries[0].b,
      groups: [entries[0].group, entries[1].group],
    });
  });

  return { vertices, triangles, groups, crackEdges };
};

const heartMeshes = {
  desktop: createHeartMesh(36, 5),
  mobile: createHeartMesh(28, 3),
};

const heartSilhouetteCurves = [
  { c1: [-0.22, 0.83], c2: [-0.86, 0.4], end: [-0.93, -0.13] },
  { c1: [-1, -0.57], c2: [-0.73, -0.94], end: [-0.41, -0.99] },
  { c1: [-0.2, -1.03], c2: [-0.05, -0.82], end: [0, -0.62] },
  { c1: [0.08, -0.82], c2: [0.24, -0.98], end: [0.47, -0.93] },
  { c1: [0.79, -0.88], c2: [0.99, -0.54], end: [0.92, -0.11] },
  { c1: [0.84, 0.36], c2: [0.29, 0.82], end: [0.01, 1.02] },
];

const desktopHeartPlateSeeds = [
  [-0.47, -0.76], [0.45, -0.74],
  [-0.78, -0.34], [-0.25, -0.38], [0.22, -0.36], [0.72, -0.29],
  [-0.58, 0.03], [-0.15, -0.01], [0.27, 0.02], [0.56, 0.12],
  [-0.38, 0.34], [-0.03, 0.3], [0.29, 0.4], [0, 0.72],
];

const mobileHeartPlateSeeds = [
  [-0.45, -0.75], [0.44, -0.72],
  [-0.72, -0.28], [-0.2, -0.33], [0.25, -0.31], [0.67, -0.22],
  [-0.43, 0.13], [0.04, 0.08], [0.34, 0.3], [0, 0.68],
];

const cubicHeartPoint = (start, curve, progress) => {
  const inverse = 1 - progress;
  const inverseSquared = inverse * inverse;
  const progressSquared = progress * progress;
  return {
    x:
      inverseSquared * inverse * start[0] +
      3 * inverseSquared * progress * curve.c1[0] +
      3 * inverse * progressSquared * curve.c2[0] +
      progressSquared * progress * curve.end[0],
    y:
      inverseSquared * inverse * start[1] +
      3 * inverseSquared * progress * curve.c1[1] +
      3 * inverse * progressSquared * curve.c2[1] +
      progressSquared * progress * curve.end[1],
  };
};

const sampleHeartSilhouette = (stepsPerCurve = 18) => {
  const points = [{ x: 0.01, y: 1.02 }];
  let start = [0.01, 1.02];
  heartSilhouetteCurves.forEach((curve) => {
    for (let step = 1; step <= stepsPerCurve; step += 1) {
      points.push(cubicHeartPoint(start, curve, step / stepsPerCurve));
    }
    start = curve.end;
  });
  points.pop();
  return points;
};

const clipHeartPolygon = (polygon, seed, otherSeed) => {
  if (!polygon.length) return polygon;
  const normalX = otherSeed[0] - seed[0];
  const normalY = otherSeed[1] - seed[1];
  const limit =
    (otherSeed[0] * otherSeed[0] + otherSeed[1] * otherSeed[1] -
      seed[0] * seed[0] - seed[1] * seed[1]) /
    2;
  const distance = (point) => point.x * normalX + point.y * normalY - limit;
  const clipped = [];

  for (let index = 0; index < polygon.length; index += 1) {
    const current = polygon[index];
    const previous = polygon[(index + polygon.length - 1) % polygon.length];
    const currentDistance = distance(current);
    const previousDistance = distance(previous);
    const currentInside = currentDistance <= 0.00001;
    const previousInside = previousDistance <= 0.00001;

    if (currentInside !== previousInside) {
      const denominator = previousDistance - currentDistance;
      const amount = Math.abs(denominator) < 0.000001 ? 0 : previousDistance / denominator;
      clipped.push({
        x: previous.x + (current.x - previous.x) * amount,
        y: previous.y + (current.y - previous.y) * amount,
      });
    }
    if (currentInside) clipped.push(current);
  }
  return clipped;
};

const getHeartPolygonCentroid = (polygon) => {
  let area = 0;
  let centerX = 0;
  let centerY = 0;
  for (let index = 0; index < polygon.length; index += 1) {
    const point = polygon[index];
    const next = polygon[(index + 1) % polygon.length];
    const cross = point.x * next.y - next.x * point.y;
    area += cross;
    centerX += (point.x + next.x) * cross;
    centerY += (point.y + next.y) * cross;
  }
  if (Math.abs(area) < 0.000001) {
    return polygon.reduce(
      (center, point) => ({ x: center.x + point.x / polygon.length, y: center.y + point.y / polygon.length }),
      { x: 0, y: 0 }
    );
  }
  return { x: centerX / (3 * area), y: centerY / (3 * area) };
};

const heartSurfaceDepth = (x, y) => {
  const leftLobe = Math.exp(-((x + 0.38) ** 2 / 0.19 + (y + 0.58) ** 2 / 0.2));
  const rightLobe = Math.exp(-((x - 0.4) ** 2 / 0.2 + (y + 0.55) ** 2 / 0.21));
  const body = Math.exp(-(x * x / 0.58 + (y - 0.04) ** 2 / 0.86));
  const notch = Math.exp(-(x * x / 0.026 + (y + 0.61) ** 2 / 0.075));
  return 0.035 + 0.18 * body + 0.34 * Math.max(leftLobe, rightLobe) + 0.08 * Math.min(leftLobe, rightLobe) - 0.12 * notch;
};

const heartSurfaceNormal = (x, y) => {
  const epsilon = 0.012;
  const dx = (heartSurfaceDepth(x + epsilon, y) - heartSurfaceDepth(x - epsilon, y)) / (epsilon * 2);
  const dy = (heartSurfaceDepth(x, y + epsilon) - heartSurfaceDepth(x, y - epsilon)) / (epsilon * 2);
  const length = Math.hypot(dx, dy, 1) || 1;
  return { x: -dx / length, y: -dy / length, z: 1 / length };
};

const createHeartPlateGeometry = (seeds) => {
  const outline = sampleHeartSilhouette();
  const pieces = seeds.map((seed, index) => {
    let polygon = outline.map((point) => ({ ...point }));
    seeds.forEach((otherSeed, otherIndex) => {
      if (otherIndex !== index) polygon = clipHeartPolygon(polygon, seed, otherSeed);
    });

    const center2d = getHeartPolygonCentroid(polygon);
    const center = { ...center2d, z: heartSurfaceDepth(center2d.x, center2d.y) };
    const vertices = polygon.map((point) => ({ ...point, z: heartSurfaceDepth(point.x, point.y) }));
    const radial = clamp(Math.hypot(center.x / 0.9, center.y / 0.94), 0, 1);
    const noise = Math.sin((index + 2.31) * 12.9898) * 0.5 + 0.5;
    const directionLength = Math.hypot(center.x, center.y + 0.04) || 1;
    const directionX = center.x / directionLength;
    const directionY = (center.y + 0.04) / directionLength;
    const scatterAngle = Math.atan2(directionY, directionX) + Math.sin(index * 1.71) * 0.19;
    const scatterDistance = 1.05 + noise * 0.72;
    const coreBoost = radial < 0.37 ? 0.009 : 0;
    const splitDistance = 0.016 + noise * 0.011 + coreBoost;

    return {
      index,
      center,
      vertices,
      normal: heartSurfaceNormal(center.x, center.y),
      radial,
      tone: Math.sin(index * 8.17) * 0.5 + 0.5,
      delay: clamp(0.035 + (1 - radial) * 0.15 + noise * 0.025, 0.035, 0.2),
      healDelay: radial * 0.14,
      scatter: {
        x: Math.cos(scatterAngle) * scatterDistance,
        y: Math.sin(scatterAngle) * scatterDistance * 0.92,
        z: -0.46 + noise * 1.18,
        rx: -0.62 + noise * 1.18,
        ry: -0.76 + (Math.sin(index * 4.37) * 0.5 + 0.5) * 1.52,
        rz: -0.72 + (Math.sin(index * 6.13) * 0.5 + 0.5) * 1.44,
      },
      arc: {
        x: Math.sin(index * 2.73) * 0.16,
        y: -0.1 - noise * 0.15,
        z: 0.18 + noise * 0.2,
      },
      split: {
        x: directionX * splitDistance,
        y: directionY * splitDistance,
        z: (index % 3 - 1) * 0.034 + (radial < 0.37 ? 0.055 : 0),
        rx: Math.sin(index * 2.07) * 0.035,
        ry: Math.sin(index * 3.31) * 0.045,
        rz: Math.sin(index * 4.91) * 0.028,
      },
    };
  });

  return {
    outline: outline.map((point) => ({ ...point, z: heartSurfaceDepth(point.x, point.y) })),
    pieces,
  };
};

const heartPlateGeometries = {
  desktop: createHeartPlateGeometry(desktopHeartPlateSeeds),
  mobile: createHeartPlateGeometry(mobileHeartPlateSeeds),
};

const rotateHeartPoint = (point, rotationX, rotationY, rotationZ = 0) => {
  const cosX = Math.cos(rotationX);
  const sinX = Math.sin(rotationX);
  const cosY = Math.cos(rotationY);
  const sinY = Math.sin(rotationY);
  const cosZ = Math.cos(rotationZ);
  const sinZ = Math.sin(rotationZ);
  const x1 = point.x * cosZ - point.y * sinZ;
  const y1 = point.x * sinZ + point.y * cosZ;
  const z1 = point.z;
  const x2 = x1 * cosY + z1 * sinY;
  const z2 = -x1 * sinY + z1 * cosY;

  return {
    x: x2,
    y: y1 * cosX - z2 * sinX,
    z: y1 * sinX + z2 * cosX,
  };
};

const transformHeartVertex = (vertex, group, motion, heartRotation) => {
  const local = {
    x: vertex.x - group.center.x,
    y: vertex.y - group.center.y,
    z: vertex.z - group.center.z,
  };
  const shardRotation = rotateHeartPoint(
    local,
    group.rotation.x * motion.scattered,
    group.rotation.y * motion.scattered,
    group.rotation.z * motion.scattered
  );
  const assembled = {
    x:
      shardRotation.x +
      group.center.x +
      group.offset.x * motion.scattered +
      group.fractureOffset.x * motion.fracture,
    y:
      shardRotation.y +
      group.center.y +
      group.offset.y * motion.scattered +
      group.fractureOffset.y * motion.fracture,
    z:
      shardRotation.z +
      group.center.z +
      group.offset.z * motion.scattered +
      group.fractureOffset.z * motion.fracture,
  };

  return rotateHeartPoint(assembled, heartRotation.x, heartRotation.y, heartRotation.z);
};

const transformHeartPlatePoint = (vertex, piece, motion, heartRotation) => {
  const local = {
    x: vertex.x - piece.center.x,
    y: vertex.y - piece.center.y,
    z: vertex.z - piece.center.z,
  };
  const localRotation = {
    x: piece.scatter.rx * motion.scattered + piece.split.rx * motion.split,
    y: piece.scatter.ry * motion.scattered + piece.split.ry * motion.split,
    z: piece.scatter.rz * motion.scattered + piece.split.rz * motion.split,
  };
  const rotated = rotateHeartPoint(local, localRotation.x, localRotation.y, localRotation.z);
  const assembled = {
    x:
      rotated.x + piece.center.x +
      piece.scatter.x * motion.scattered +
      piece.arc.x * motion.arc +
      piece.split.x * motion.split,
    y:
      rotated.y + piece.center.y +
      piece.scatter.y * motion.scattered +
      piece.arc.y * motion.arc +
      piece.split.y * motion.split,
    z:
      rotated.z + piece.center.z +
      piece.scatter.z * motion.scattered +
      piece.arc.z * motion.arc +
      piece.split.z * motion.split,
  };
  return rotateHeartPoint(assembled, heartRotation.x, heartRotation.y, heartRotation.z);
};

const transformHeartPlateNormal = (piece, motion, heartRotation) => {
  const localRotation = {
    x: piece.scatter.rx * motion.scattered + piece.split.rx * motion.split,
    y: piece.scatter.ry * motion.scattered + piece.split.ry * motion.split,
    z: piece.scatter.rz * motion.scattered + piece.split.rz * motion.split,
  };
  const local = rotateHeartPoint(piece.normal, localRotation.x, localRotation.y, localRotation.z);
  const normal = rotateHeartPoint(local, heartRotation.x, heartRotation.y, heartRotation.z);
  if (normal.z < 0) return { x: -normal.x, y: -normal.y, z: -normal.z };
  return normal;
};

const projectHeartPoint = (point, width, height, scale) => {
  const camera = 5.6;
  const perspective = camera / Math.max(3.75, camera - point.z);

  return {
    x: width * 0.5 + point.x * scale * perspective,
    y: height * (width < 620 ? 0.43 : 0.46) + point.y * scale * perspective,
    z: point.z,
  };
};

const appendHeartScreenPolygon = (path, points, offsetX = 0, offsetY = 0) => {
  if (!points.length) return path;
  path.moveTo(points[0].x + offsetX, points[0].y + offsetY);
  for (let index = 1; index < points.length; index += 1) {
    path.lineTo(points[index].x + offsetX, points[index].y + offsetY);
  }
  path.closePath();
  return path;
};

const createHeartScreenPath = (points, offsetX = 0, offsetY = 0) => {
  const path = new Path2D();
  return appendHeartScreenPolygon(path, points, offsetX, offsetY);
};

const getHeartScreenFrame = (piece, motion, rotation, width, height, scale) => {
  const points3d = piece.vertices.map((vertex) => transformHeartPlatePoint(vertex, piece, motion, rotation));
  const points2d = points3d.map((point) => projectHeartPoint(point, width, height, scale));
  const center = points2d.reduce(
    (result, point) => ({ x: result.x + point.x / points2d.length, y: result.y + point.y / points2d.length }),
    { x: 0, y: 0 }
  );
  return {
    piece,
    motion,
    points2d,
    path: createHeartScreenPath(points2d),
    center,
    normal: transformHeartPlateNormal(piece, motion, rotation),
    depth: points3d.reduce((sum, point) => sum + point.z, 0) / Math.max(points3d.length, 1),
  };
};

const getProjectedHeartOutline = (geometry, rotation, width, height, scale) => {
  const points = geometry.outline.map((point) =>
    projectHeartPoint(rotateHeartPoint(point, rotation.x, rotation.y, rotation.z), width, height, scale)
  );
  return { points, path: createHeartScreenPath(points) };
};

const easeOutQuint = (value) => 1 - Math.pow(1 - clamp(value, 0, 1), 5);
const smoothStep = (start, end, value) => {
  const progress = clamp((value - start) / Math.max(end - start, 0.0001), 0, 1);
  return progress * progress * (3 - 2 * progress);
};

const resizeHeartIntroCanvas = () => {
  if (!heartIntroCanvas || !heartIntroContext) return null;

  const width = Math.max(1, heartIntroCanvas.clientWidth);
  const height = Math.max(1, heartIntroCanvas.clientHeight);
  const dpr = Math.min(window.devicePixelRatio || 1, width < 620 ? 1.35 : 1.6);
  const pixelWidth = Math.round(width * dpr);
  const pixelHeight = Math.round(height * dpr);

  if (heartIntroCanvas.width !== pixelWidth || heartIntroCanvas.height !== pixelHeight) {
    heartIntroCanvas.width = pixelWidth;
    heartIntroCanvas.height = pixelHeight;
  }

  heartIntroContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { width, height };
};

const drawHeartCracks = (context, mesh, motions, width, height, scale, rotation, assembly, healing) => {
  if (assembly < 0.66 || healing >= 0.998) return;

  const visibility = smoothStep(0.66, 0.86, assembly) * (1 - healing);
  const cavityWidth = Math.max(1.1, scale * (0.022 - healing * 0.017));
  const crackPaths = [
    [[0.012, -0.63], [-0.035, -0.49], [0.028, -0.37], [-0.018, -0.23], [0.068, -0.1], [-0.024, 0.045], [0.042, 0.18], [-0.034, 0.32], [0.018, 0.48], [-0.035, 0.66]],
    [[-0.018, -0.23], [-0.17, -0.3], [-0.31, -0.285], [-0.46, -0.4]],
    [[0.068, -0.1], [0.19, -0.18], [0.31, -0.31], [0.43, -0.48]],
    [[0.042, 0.18], [0.18, 0.235], [0.34, 0.22], [0.48, 0.31]],
    [[-0.034, 0.32], [-0.17, 0.39], [-0.32, 0.43]],
    [[0.018, 0.48], [0.13, 0.52], [0.21, 0.59]],
  ];
  const projectCrackPoint = ([x, y]) => {
    const radius = clamp(Math.hypot(x / 0.94, y / 0.73), 0, 1);
    const z = 0.08 + 0.47 * Math.pow(1 - radius, 0.7);
    return projectHeartPoint(rotateHeartPoint({ x, y, z }, rotation.x, rotation.y, rotation.z), width, height, scale);
  };

  context.save();
  context.lineCap = "square";
  context.lineJoin = "miter";
  context.miterLimit = 2.5;

  crackPaths.forEach((path, pathIndex) => {
    const points = path.map(projectCrackPoint);
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.strokeStyle = `rgba(9, 0, 4, ${0.97 * visibility})`;
    context.lineWidth = cavityWidth * (pathIndex === 0 ? 1.12 : 0.52);
    context.shadowColor = `rgba(35, 0, 12, ${0.72 * visibility})`;
    context.shadowBlur = cavityWidth * 0.8;
    context.stroke();

    if (pathIndex === 0) {
      context.shadowBlur = 0;
      context.strokeStyle = `rgba(113, 0, 29, ${0.34 * visibility})`;
      context.lineWidth = Math.max(0.7, cavityWidth * 0.16);
      context.stroke();
    }
  });

  if (healing > 0.08) {
    const repairGlow = Math.sin(clamp(healing, 0, 1) * Math.PI) * smoothStep(0.68, 0.94, assembly);
    crackPaths.forEach((path, pathIndex) => {
      if (pathIndex % 2 !== 0) return;
      const points = path.map(projectCrackPoint);
      context.beginPath();
      points.forEach((point, index) => {
        if (index === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      });
      context.strokeStyle = `rgba(255, 112, 139, ${repairGlow * 0.68})`;
      context.lineWidth = Math.max(0.8, scale * 0.009 * repairGlow);
      context.shadowColor = "rgba(255, 35, 82, 0.9)";
      context.shadowBlur = scale * 0.034 * repairGlow;
      context.stroke();
    });
  }
  context.restore();
};

const getHeartScreenPolygonArea = (points) => {
  let area = 0;
  for (let index = 0; index < points.length; index += 1) {
    const point = points[index];
    const next = points[(index + 1) % points.length];
    area += point.x * next.y - next.x * point.y;
  }
  return area * 0.5;
};

const drawHeartUnderbody = (context, outlinePath, scale, visibility) => {
  if (visibility <= 0.001) return;
  context.save();
  context.globalAlpha = visibility;
  context.fillStyle = "#210008";
  context.shadowColor = "rgba(0, 0, 0, 0.88)";
  context.shadowBlur = Math.max(8, scale * 0.07);
  context.shadowOffsetY = scale * 0.035;
  context.fill(outlinePath);
  context.shadowBlur = 0;
  context.shadowOffsetY = 0;

  const layers = [
    { x: 0.018, y: 0.03, color: "#26000b" },
    { x: 0.012, y: 0.021, color: "#3b0012" },
    { x: 0.006, y: 0.011, color: "#5b001c" },
  ];
  layers.forEach((layer) => {
    context.save();
    context.translate(scale * layer.x, scale * layer.y);
    context.fillStyle = layer.color;
    context.fill(outlinePath);
    context.restore();
  });
  context.fillStyle = "#360010";
  context.fill(outlinePath);
  context.restore();
};

const drawHeartPlateThickness = (context, frame, scale, visibility, mobile) => {
  if (visibility <= 0.001) return;
  context.save();
  context.globalAlpha = visibility;
  if (!mobile) {
    context.fillStyle = "rgba(24, 0, 8, 0.86)";
    context.shadowColor = "rgba(0, 0, 0, 0.78)";
    context.shadowBlur = scale * 0.035;
    context.shadowOffsetX = scale * 0.012;
    context.shadowOffsetY = scale * 0.022;
    context.fill(frame.path);
    context.shadowBlur = 0;
  }

  const layerCount = mobile ? 2 : 4;
  for (let layer = layerCount; layer >= 1; layer -= 1) {
    const amount = layer / layerCount;
    context.save();
    context.translate(scale * 0.012 * amount, scale * 0.022 * amount);
    context.fillStyle = layer === layerCount ? "#26000b" : `rgba(${42 + layer * 9}, 0, ${14 + layer * 4}, 0.98)`;
    context.fill(frame.path);
    context.restore();
  }
  context.restore();
};

const drawHeartPlateBevel = (context, frame, scale, visibility) => {
  if (visibility <= 0.001) return;
  const points = frame.points2d;
  const area = getHeartScreenPolygonArea(points);
  const lightX = -0.58;
  const lightY = -0.82;

  context.save();
  context.globalAlpha = visibility;
  context.lineJoin = "bevel";
  context.lineCap = "butt";
  context.strokeStyle = "rgba(53, 0, 16, 0.86)";
  context.lineWidth = Math.max(0.9, scale * 0.0052);
  context.stroke(frame.path);

  for (let index = 0; index < points.length; index += 1) {
    const point = points[index];
    const next = points[(index + 1) % points.length];
    const dx = next.x - point.x;
    const dy = next.y - point.y;
    const length = Math.hypot(dx, dy) || 1;
    let normalX = area >= 0 ? dy / length : -dy / length;
    let normalY = area >= 0 ? -dx / length : dx / length;
    const middleX = (point.x + next.x) * 0.5 - frame.center.x;
    const middleY = (point.y + next.y) * 0.5 - frame.center.y;
    if (normalX * middleX + normalY * middleY < 0) {
      normalX *= -1;
      normalY *= -1;
    }
    const light = Math.max(0, normalX * lightX + normalY * lightY);
    if (light < 0.16) continue;
    context.beginPath();
    context.moveTo(point.x, point.y);
    context.lineTo(next.x, next.y);
    context.strokeStyle = `rgba(255, 214, 223, ${0.18 + light * 0.42})`;
    context.lineWidth = Math.max(0.55, scale * (0.0018 + light * 0.0019));
    context.stroke();
  }
  context.restore();
};

const drawHeartPlateFacets = (context, frame, visibility, mobile) => {
  if (visibility <= 0.001 || frame.points2d.length < 4) return;
  const points = frame.points2d;
  const count = points.length;
  const firstIndex = (frame.piece.index * 3 + 1) % count;
  const secondIndex = (firstIndex + Math.max(2, Math.floor(count * 0.42))) % count;
  const pivot = {
    x: frame.center.x + (frame.piece.tone - 0.5) * 8,
    y: frame.center.y - 3 + (frame.piece.index % 3) * 2,
  };

  context.save();
  context.clip(frame.path);
  context.globalAlpha = visibility;

  const lightFacet = context.createLinearGradient(
    points[firstIndex].x,
    points[firstIndex].y,
    pivot.x,
    pivot.y
  );
  lightFacet.addColorStop(0, "rgba(255, 226, 233, 0.26)");
  lightFacet.addColorStop(1, "rgba(255, 105, 139, 0.02)");
  context.globalCompositeOperation = "screen";
  context.fillStyle = lightFacet;
  context.beginPath();
  context.moveTo(pivot.x, pivot.y);
  context.lineTo(points[firstIndex].x, points[firstIndex].y);
  context.lineTo(points[(firstIndex + 1) % count].x, points[(firstIndex + 1) % count].y);
  context.closePath();
  context.fill();

  if (!mobile || frame.piece.index % 2 === 0) {
    const darkFacet = context.createLinearGradient(
      pivot.x,
      pivot.y,
      points[secondIndex].x,
      points[secondIndex].y
    );
    darkFacet.addColorStop(0, "rgba(71, 0, 23, 0.02)");
    darkFacet.addColorStop(1, "rgba(31, 0, 12, 0.3)");
    context.globalCompositeOperation = "multiply";
    context.fillStyle = darkFacet;
    context.beginPath();
    context.moveTo(pivot.x, pivot.y);
    context.lineTo(points[secondIndex].x, points[secondIndex].y);
    context.lineTo(points[(secondIndex + 1) % count].x, points[(secondIndex + 1) % count].y);
    context.closePath();
    context.fill();
  }
  context.restore();
};

const drawHeartHealingSeams = (context, frames, outlinePath, scale, healing) => {
  const glow = Math.sin(clamp(healing, 0, 1) * Math.PI);
  if (glow <= 0.012) return;

  context.save();
  context.clip(outlinePath);
  context.lineJoin = "bevel";
  context.lineCap = "butt";
  context.globalCompositeOperation = "screen";
  frames.forEach((frame) => {
    const localGlow = glow * frame.motion.repairGlow;
    if (localGlow <= 0.01) return;
    context.globalAlpha = localGlow;
    context.strokeStyle = "rgba(255, 173, 190, 0.72)";
    context.lineWidth = Math.max(0.7, scale * 0.0046);
    context.shadowColor = "rgba(255, 24, 73, 0.88)";
    context.shadowBlur = scale * 0.018;
    context.stroke(frame.path);
  });
  context.restore();
};

const drawHeartOuterRim = (context, outlinePoints, scale, visibility) => {
  if (visibility <= 0.001) return;
  const path = createHeartScreenPath(outlinePoints);
  context.save();
  context.globalAlpha = visibility;
  context.lineJoin = "round";
  context.strokeStyle = "rgba(35, 0, 12, 0.86)";
  context.lineWidth = Math.max(1.1, scale * 0.007);
  context.stroke(path);

  const center = outlinePoints.reduce(
    (result, point) => ({ x: result.x + point.x / outlinePoints.length, y: result.y + point.y / outlinePoints.length }),
    { x: 0, y: 0 }
  );
  for (let index = 0; index < outlinePoints.length; index += 1) {
    const point = outlinePoints[index];
    const next = outlinePoints[(index + 1) % outlinePoints.length];
    const middleX = (point.x + next.x) * 0.5 - center.x;
    const middleY = (point.y + next.y) * 0.5 - center.y;
    const radialLength = Math.hypot(middleX, middleY) || 1;
    const light = Math.max(0, (-middleX * 0.56 - middleY * 0.83) / radialLength);
    if (light < 0.28) continue;
    context.beginPath();
    context.moveTo(point.x, point.y);
    context.lineTo(next.x, next.y);
    context.strokeStyle = `rgba(255, 199, 213, ${0.16 + light * 0.42})`;
    context.lineWidth = Math.max(0.6, scale * (0.0018 + light * 0.0018));
    context.stroke();
  }
  context.restore();
};

const drawHeartReflection = (context, width, height, scale, opacity) => {
  const centerX = width * 0.5;
  const centerY = height * (width < 620 ? 0.43 : 0.46);
  context.save();
  context.globalAlpha = opacity;
  context.filter = `blur(${Math.max(7, scale * 0.045)}px)`;
  const glow = context.createRadialGradient(centerX, centerY + scale * 0.78, 0, centerX, centerY + scale * 0.78, scale * 0.92);
  glow.addColorStop(0, "rgba(255, 24, 70, 0.34)");
  glow.addColorStop(0.42, "rgba(130, 0, 32, 0.18)");
  glow.addColorStop(1, "rgba(34, 0, 10, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.ellipse(centerX, centerY + scale * 0.78, scale * 0.82, scale * 0.18, 0, 0, Math.PI * 2);
  context.fill();
  context.filter = "none";
  context.restore();
};

const drawHeartDebris = (context, width, height, scale, progress, mobile) => {
  const count = mobile ? 10 : 24;
  const centerX = width * 0.5;
  const centerY = height * (mobile ? 0.43 : 0.46);

  context.save();
  for (let index = 0; index < count; index += 1) {
    const seed = index * 4.781 + 1.37;
    const delay = (index % 9) * 0.012;
    const capture = easeOutQuint((progress - 0.035 - delay) / 0.5);
    const visibility = smoothStep(0.01, 0.1, progress) * (1 - smoothStep(0.42 + delay, 0.67 + delay, progress));
    if (visibility <= 0.002) continue;

    const prefersTail = index % 5 === 0;
    const angle = prefersTail
      ? Math.PI * (0.38 + (Math.sin(seed) * 0.5 + 0.5) * 0.24)
      : seed * 0.83;
    const startDistance = scale * (1.02 + (Math.sin(seed * 1.93) * 0.5 + 0.5) * 0.84);
    const targetDistance = scale * (0.68 + (Math.sin(seed * 2.41) * 0.5 + 0.5) * 0.28);
    const distance = startDistance + (targetDistance - startDistance) * capture;
    const tail = prefersTail ? scale * (0.38 + (index % 3) * 0.1) * (1 - capture) : 0;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance * 0.75 + tail;
    const rotation = seed + capture * (2.1 + (index % 4) * 0.56);
    const size = scale * (0.018 + (index % 6) * 0.006) * (0.82 + capture * 0.18);
    const bright = index % 7 === 0;

    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.beginPath();
    context.moveTo(-size * 0.92, -size * 0.38);
    context.lineTo(size, 0);
    context.lineTo(-size * 0.5, size * (0.42 + (index % 3) * 0.18));
    context.closePath();
    context.fillStyle = bright
      ? `rgba(255, 220, 226, ${visibility * 0.82})`
      : `rgba(${118 + (index % 4) * 28}, 0, ${25 + (index % 3) * 15}, ${visibility * 0.86})`;
    context.fill();
    context.strokeStyle = `rgba(255, 76, 111, ${visibility * 0.58})`;
    context.lineWidth = Math.max(0.45, scale * 0.0025);
    context.stroke();
    context.restore();
  }
  context.restore();
};

const drawHeartGloss = (context, clipPath, width, height, scale, healing, gleamProgress) => {
  const centerX = width * 0.5;
  const centerY = height * (width < 620 ? 0.43 : 0.46);
  context.save();
  context.clip(clipPath);
  context.globalCompositeOperation = "screen";

  const leftHighlight = context.createRadialGradient(
    centerX - scale * 0.4,
    centerY - scale * 0.47,
    scale * 0.015,
    centerX - scale * 0.34,
    centerY - scale * 0.4,
    scale * 0.48
  );
  leftHighlight.addColorStop(0, `rgba(255, 250, 251, ${0.4 + healing * 0.11})`);
  leftHighlight.addColorStop(0.16, `rgba(255, 184, 198, ${0.3 + healing * 0.07})`);
  leftHighlight.addColorStop(0.55, "rgba(255, 42, 82, 0.09)");
  leftHighlight.addColorStop(1, "rgba(255, 10, 58, 0)");
  context.fillStyle = leftHighlight;
  context.fillRect(centerX - scale * 1.25, centerY - scale * 1.1, scale * 2.5, scale * 2.2);

  const rightHighlight = context.createRadialGradient(
    centerX + scale * 0.39,
    centerY - scale * 0.43,
    0,
    centerX + scale * 0.39,
    centerY - scale * 0.37,
    scale * 0.42
  );
  rightHighlight.addColorStop(0, `rgba(255, 244, 248, ${0.34 + healing * 0.13})`);
  rightHighlight.addColorStop(0.2, "rgba(255, 151, 174, 0.24)");
  rightHighlight.addColorStop(0.62, "rgba(255, 24, 68, 0.05)");
  rightHighlight.addColorStop(1, "rgba(255, 0, 45, 0)");
  context.fillStyle = rightHighlight;
  context.fillRect(centerX - scale * 1.2, centerY - scale, scale * 2.4, scale * 2);

  context.save();
  context.filter = `blur(${Math.max(2.2, scale * 0.012)}px)`;
  context.lineCap = "round";
  context.strokeStyle = `rgba(255, 246, 248, ${0.2 + healing * 0.22})`;
  context.lineWidth = Math.max(3.5, scale * 0.058);
  context.beginPath();
  context.moveTo(centerX - scale * 0.62, centerY - scale * 0.52);
  context.bezierCurveTo(
    centerX - scale * 0.72,
    centerY - scale * 0.29,
    centerX - scale * 0.6,
    centerY - scale * 0.08,
    centerX - scale * 0.48,
    centerY + scale * 0.02
  );
  context.stroke();
  context.strokeStyle = `rgba(255, 235, 241, ${0.16 + healing * 0.18})`;
  context.lineWidth = Math.max(2.8, scale * 0.038);
  context.beginPath();
  context.moveTo(centerX + scale * 0.29, centerY - scale * 0.56);
  context.bezierCurveTo(
    centerX + scale * 0.5,
    centerY - scale * 0.5,
    centerX + scale * 0.58,
    centerY - scale * 0.32,
    centerX + scale * 0.55,
    centerY - scale * 0.18
  );
  context.stroke();
  context.filter = "none";
  context.restore();

  const notchShade = context.createRadialGradient(
    centerX,
    centerY - scale * 0.6,
    0,
    centerX,
    centerY - scale * 0.59,
    scale * 0.29
  );
  notchShade.addColorStop(0, "rgba(25, 0, 9, 0.58)");
  notchShade.addColorStop(0.45, "rgba(63, 0, 19, 0.23)");
  notchShade.addColorStop(1, "rgba(84, 0, 24, 0)");
  context.globalCompositeOperation = "multiply";
  context.fillStyle = notchShade;
  context.fillRect(centerX - scale * 0.42, centerY - scale * 0.92, scale * 0.84, scale * 0.66);

  const lowerShade = context.createLinearGradient(0, centerY - scale * 0.15, 0, centerY + scale * 0.92);
  lowerShade.addColorStop(0, "rgba(255, 20, 60, 0)");
  lowerShade.addColorStop(0.62, "rgba(104, 0, 27, 0.2)");
  lowerShade.addColorStop(1, "rgba(35, 0, 11, 0.54)");
  context.globalCompositeOperation = "multiply";
  context.fillStyle = lowerShade;
  context.fillRect(centerX - scale * 1.25, centerY - scale, scale * 2.5, scale * 2.1);

  if (gleamProgress > 0.001) {
    const sweepX = centerX - scale * 1.24 + gleamProgress * scale * 2.48;
    const sweep = context.createLinearGradient(sweepX - scale * 0.16, 0, sweepX + scale * 0.16, 0);
    const visibility = Math.sin(gleamProgress * Math.PI);
    sweep.addColorStop(0, "rgba(255, 255, 255, 0)");
    sweep.addColorStop(0.42, `rgba(255, 217, 226, ${visibility * 0.3})`);
    sweep.addColorStop(0.5, `rgba(255, 255, 255, ${visibility * 0.72})`);
    sweep.addColorStop(0.58, `rgba(255, 194, 211, ${visibility * 0.25})`);
    sweep.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.globalCompositeOperation = "screen";
    context.fillStyle = sweep;
    context.save();
    context.translate(sweepX, centerY);
    context.rotate(-0.22);
    context.translate(-sweepX, -centerY);
    context.fillRect(sweepX - scale * 0.24, centerY - scale * 1.2, scale * 0.48, scale * 2.4);
    context.restore();
  }
  context.restore();
};

const drawHeartSparkles = (context, width, height, scale, progress) => {
  const visibility = Math.sin(clamp(progress, 0, 1) * Math.PI);
  if (visibility <= 0.001) return;

  context.save();
  context.globalCompositeOperation = "screen";
  const sparkleAngles = [-0.72, 2.74, 0.48];
  for (let index = 0; index < sparkleAngles.length; index += 1) {
    const angle = sparkleAngles[index];
    const distance = scale * [0.82, 0.9, 1.02][index];
    const travel = progress * scale * (0.055 + index * 0.012);
    const x = width * 0.5 + Math.cos(angle) * (distance + travel);
    const y = height * (width < 620 ? 0.43 : 0.46) + Math.sin(angle) * (distance * 0.72 + travel);
    const size = [5.8, 3.2, 2.5][index] * visibility;
    const alpha = visibility * [0.88, 0.62, 0.5][index];

    context.beginPath();
    context.moveTo(x, y - size * 2.4);
    context.lineTo(x + size * 0.42, y - size * 0.42);
    context.lineTo(x + size * 2.4, y);
    context.lineTo(x + size * 0.42, y + size * 0.42);
    context.lineTo(x, y + size * 2.4);
    context.lineTo(x - size * 0.42, y + size * 0.42);
    context.lineTo(x - size * 2.4, y);
    context.lineTo(x - size * 0.42, y - size * 0.42);
    context.closePath();
    context.fillStyle = `rgba(255, 238, 218, ${alpha})`;
    context.shadowColor = "rgba(255, 116, 149, 0.9)";
    context.shadowBlur = size * 3;
    context.fill();
  }
  context.restore();
};

const drawHeartSqueezeAura = (context, width, height, scale, squeeze, reveal) => {
  if (squeeze <= 0.002) return;
  const centerX = width * 0.5;
  const centerY = height * (width < 620 ? 0.43 : 0.46);
  const pulse = Math.sin(clamp(squeeze, 0, 1) * Math.PI * 0.5);

  context.save();
  context.globalCompositeOperation = "screen";
  context.globalAlpha = pulse * (0.52 + reveal * 0.26);
  const glow = context.createRadialGradient(
    centerX,
    centerY - scale * 0.02,
    scale * 0.06,
    centerX,
    centerY,
    scale * 0.72
  );
  glow.addColorStop(0, "rgba(255, 232, 238, 0.72)");
  glow.addColorStop(0.18, "rgba(255, 67, 111, 0.52)");
  glow.addColorStop(0.55, "rgba(174, 0, 47, 0.16)");
  glow.addColorStop(1, "rgba(92, 0, 28, 0)");
  context.fillStyle = glow;
  context.beginPath();
  context.ellipse(centerX, centerY, scale * 0.78, scale * 0.66, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();
};

const getHeartHandsLayout = (width, height, scale, mobile) => {
  const centerX = width * 0.5;
  const centerY = height * (mobile ? 0.43 : 0.46);
  const renderSize = mobile
    ? Math.min(width * 1.22, height * 0.62, scale * 3.05)
    : Math.min(width * 0.58, height * 0.9, scale * 2.78);
  return {
    centerX,
    centerY,
    renderSize,
    destinationLeft: centerX - renderSize * 0.5,
    destinationTop: centerY - renderSize * 0.5,
  };
};

const drawOpenHeartHands = (
  context,
  width,
  height,
  scale,
  leftSqueeze,
  rightSqueeze,
  visibility,
  mobile
) => {
  if (!isHeartHandsImageReady(heartHandsImage) || visibility <= 0.002) return;

  const imageWidth = heartHandsImage.naturalWidth;
  const imageHeight = heartHandsImage.naturalHeight;
  if (!imageWidth || !imageHeight) return;

  const {
    centerX,
    centerY,
    renderSize,
    destinationLeft,
    destinationTop,
  } = getHeartHandsLayout(width, height, scale, mobile);
  const sourceHalf = imageWidth * 0.5;
  const destinationHalf = renderSize * 0.5;

  context.save();
  context.globalAlpha = visibility;

  [-1, 1].forEach((side) => {
    const isLeft = side < 0;
    const squeeze = isLeft ? leftSqueeze : rightSqueeze;
    const inwardTravel = renderSize * 0.128 * squeeze;
    const lift = renderSize * 0.015 * squeeze;
    const handScale = 1 + squeeze * 0.036;
    const pivotX = centerX + side * renderSize * 0.245;
    const pivotY = centerY + renderSize * 0.34;
    const destinationX = destinationLeft + (isLeft ? 0 : destinationHalf);
    const sourceOverlap = 3;
    const sourceX = isLeft ? 0 : sourceHalf - sourceOverlap;
    const sourceWidth = sourceHalf + sourceOverlap;

    context.save();
    context.translate(pivotX - side * inwardTravel, pivotY - lift);
    context.rotate(-side * squeeze * 0.126);
    context.scale(handScale, handScale);
    context.translate(-pivotX, -pivotY);
    context.drawImage(
      heartHandsImage,
      sourceX,
      0,
      sourceWidth,
      imageHeight,
      destinationX,
      destinationTop,
      destinationHalf + renderSize * (sourceOverlap / imageWidth),
      renderSize
    );
    context.restore();
  });

  context.restore();
};

const drawClosedHeartHands = (context, width, height, scale, visibility, mobile) => {
  if (visibility <= 0.002) return;
  if (!isHeartHandsImageReady(heartHandsClosedImage)) {
    drawOpenHeartHands(context, width, height, scale, 1, 1, visibility, mobile);
    return;
  }
  const imageWidth = heartHandsClosedImage.naturalWidth;
  const imageHeight = heartHandsClosedImage.naturalHeight;
  if (!imageWidth || !imageHeight) return;

  const {
    centerX,
    centerY,
    renderSize,
    destinationLeft,
    destinationTop,
  } = getHeartHandsLayout(width, height, scale, mobile);
  const settle = 1 - Math.min(1, visibility);
  const closedSize = renderSize * (1.015 + settle * 0.012);

  context.save();
  context.globalAlpha = visibility;
  context.translate(centerX, centerY - renderSize * 0.015);
  context.scale(closedSize / renderSize, closedSize / renderSize);
  context.translate(-centerX, -centerY);
  context.drawImage(
    heartHandsClosedImage,
    0,
    0,
    imageWidth,
    imageHeight,
    destinationLeft,
    destinationTop - renderSize * 0.015,
    renderSize,
    renderSize
  );
  context.restore();
};

const drawHeartHandsOcclusion = (context, width, height, scale, visibility) => {
  if (visibility <= 0.002) return;
  const centerX = width * 0.5;
  const centerY = height * (width < 620 ? 0.43 : 0.46);

  context.save();
  context.globalAlpha = visibility;
  const cover = context.createRadialGradient(
    centerX,
    centerY,
    scale * 0.08,
    centerX,
    centerY,
    scale * 0.78
  );
  cover.addColorStop(0, "rgba(18, 0, 7, 0.96)");
  cover.addColorStop(0.52, "rgba(34, 0, 13, 0.84)");
  cover.addColorStop(0.82, "rgba(50, 0, 18, 0.28)");
  cover.addColorStop(1, "rgba(50, 0, 18, 0)");
  context.fillStyle = cover;
  context.beginPath();
  context.ellipse(centerX, centerY, scale * 0.84, scale * 0.76, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();
};

const renderHeartIntro = (progress) => {
  if (!heartIntroContext) return;

  const size = resizeHeartIntroCanvas();
  if (!size) return;
  const { width, height } = size;
  const context = heartIntroContext;
  const mobile = width < 620;
  const geometry = mobile ? heartPlateGeometries.mobile : heartPlateGeometries.desktop;
  const reveal = reduceMotion ? smoothStep(0.02, 0.2, progress) : smoothStep(0.015, 0.14, progress);
  const finish = smoothStep(reduceMotion ? 0.7 : 0.92, 1, progress);
  const handsReveal = reduceMotion ? smoothStep(0.02, 0.2, progress) : smoothStep(0.02, 0.12, progress);
  const leftClose = reduceMotion ? 0 : smoothStep(0.24, 0.43, progress);
  const rightClose = reduceMotion ? 0 : smoothStep(0.252, 0.442, progress);
  const leftOpen = reduceMotion ? 1 : smoothStep(0.548, 0.765, progress);
  const rightOpen = reduceMotion ? 1 : smoothStep(0.535, 0.752, progress);
  const leftSqueeze = reduceMotion ? 0 : leftClose * (1 - leftOpen);
  const rightSqueeze = reduceMotion ? 0 : rightClose * (1 - rightOpen);
  const squeeze = (leftSqueeze + rightSqueeze) * 0.5;
  const closedIn = reduceMotion ? 0 : smoothStep(0.405, 0.46, progress);
  const closedOut = reduceMotion ? 1 : smoothStep(0.565, 0.645, progress);
  const closedHandsVisibility = closedIn * (1 - closedOut);
  const openHandsVisibility = reduceMotion ? 1 : 1 - closedHandsVisibility;
  const brokenVisibility = reduceMotion
    ? 0
    : handsReveal * (1 - smoothStep(0.39, 0.5, progress));
  const healing = reduceMotion ? 1 : smoothStep(0.43, 0.59, progress);
  const wholeVisibility = reduceMotion
    ? smoothStep(0.04, 0.22, progress)
    : smoothStep(0.54, 0.7, progress);
  const heartVisibility = clamp(brokenVisibility + wholeVisibility, 0, 1);
  const sceneAlpha = smoothStep(0.01, 0.11, progress) * (1 - finish * 0.72);
  const finalBreath = reduceMotion
    ? 0
    : Math.sin(smoothStep(0.78, 0.93, progress) * Math.PI) * 0.011;
  const scale =
    Math.min(width * (mobile ? 0.42 : 0.29), height * (mobile ? 0.24 : 0.3)) *
    (1 + finalBreath);
  const presentationTurn = reduceMotion
    ? 0
    : Math.sin(smoothStep(0.74, 0.94, progress) * Math.PI) * 0.021;
  const rotation = reduceMotion
    ? { x: -0.024, y: 0.038, z: 0 }
    : {
        x: -0.035 + wholeVisibility * 0.011,
        y: -0.045 + wholeVisibility * 0.083 + presentationTurn,
        z: -0.006 + wholeVisibility * 0.006,
      };
  const frames = geometry.pieces.map((piece) => {
    const localHealing = reduceMotion
      ? 1
      : smoothStep(piece.healDelay * 0.72, Math.min(1, piece.healDelay * 0.72 + 0.68), healing);
    const healed = localHealing >= 0.985 || healing >= 0.998;
    const motion = {
      scattered: 0,
      arc: 0,
      split: 0,
      repairGlow: Math.sin(localHealing * Math.PI),
    };
    return {
      ...getHeartScreenFrame(piece, motion, rotation, width, height, scale),
      localAssembly: 1,
      localHealing,
    };
  }).sort((a, b) => a.depth - b.depth);
  const bodyAlpha = sceneAlpha * heartVisibility;
  const outline = getProjectedHeartOutline(geometry, rotation, width, height, scale);
  const topcoatAlpha = 1;
  const plateVisibility = bodyAlpha;

  heartIntro?.style.setProperty("--heart-intro-reveal", reveal.toFixed(4));
  heartIntro?.style.setProperty("--heart-intro-finish", finish.toFixed(4));
  const copyReveal = reduceMotion
    ? reveal * (1 - finish)
    : smoothStep(0.74, 0.84, progress) * (1 - finish);
  heartIntro?.style.setProperty("--heart-copy-reveal", copyReveal.toFixed(4));
  if (progress >= (reduceMotion ? 0.3 : 0.72)) heartIntro?.classList.add("is-healed");

  context.clearRect(0, 0, width, height);
  drawHeartReflection(context, width, height, scale, bodyAlpha * (0.42 + wholeVisibility * 0.58));

  const centerX = width * 0.5;
  const centerY = height * (mobile ? 0.43 : 0.46);
  const frontClip = new Path2D();
  frames.forEach((frame) => appendHeartScreenPolygon(frontClip, frame.points2d));

  const underbodyVisibility = bodyAlpha * (0.54 + (1 - topcoatAlpha) * 0.46);
  drawHeartUnderbody(context, outline.path, scale, underbodyVisibility);

  const thicknessVisibility = plateVisibility * (0.34 + (1 - topcoatAlpha) * 0.66) * (1 - topcoatAlpha * 0.84);
  frames.forEach((frame) => {
    drawHeartPlateThickness(context, frame, scale, thicknessVisibility, mobile);
  });

  const material = context.createLinearGradient(
    centerX - scale * 0.78,
    centerY - scale * 0.86,
    centerX + scale * 0.78,
    centerY + scale * 0.98
  );
  material.addColorStop(0, "#ff7188");
  material.addColorStop(0.16, "#f72a56");
  material.addColorStop(0.42, "#d9063d");
  material.addColorStop(0.7, "#8d0028");
  material.addColorStop(1, "#31000e");

  context.save();
  frames.forEach((frame) => {
    const normal = frame.normal;
    const lambert = clamp(normal.x * -0.46 + normal.y * -0.58 + normal.z * 0.67, 0, 1);
    const halfLength = Math.hypot(-0.46, -0.58, 1.67);
    const specular = Math.pow(
      clamp((normal.x * -0.46 + normal.y * -0.58 + normal.z * 1.67) / halfLength, 0, 1),
      30
    );
    const individuality = (1 - topcoatAlpha) * (frame.piece.tone - 0.5);

    context.save();
    context.globalAlpha = plateVisibility;
    context.fillStyle = material;
    context.fill(frame.path);

    if (lambert < 0.64 || individuality < 0) {
      context.globalCompositeOperation = "multiply";
      context.fillStyle = `rgba(49, 0, 17, ${clamp((0.64 - lambert) * 0.38 - individuality * 0.09, 0, 0.2)})`;
      context.fill(frame.path);
    }
    if (lambert > 0.55 || individuality > 0 || specular > 0.05) {
      context.globalCompositeOperation = "screen";
      context.fillStyle = `rgba(255, 142, 164, ${clamp((lambert - 0.55) * 0.16 + individuality * 0.055 + specular * 0.34, 0, 0.28)})`;
      context.fill(frame.path);
    }
    context.restore();

    drawHeartPlateFacets(
      context,
      frame,
      plateVisibility * (1 - topcoatAlpha) * 0.9,
      mobile
    );

    drawHeartPlateBevel(
      context,
      frame,
      scale,
      plateVisibility * (1 - topcoatAlpha * 0.97)
    );
  });
  context.restore();

  if (topcoatAlpha > 0.001) {
    context.save();
    context.globalAlpha = bodyAlpha * topcoatAlpha * 0.96;
    context.fillStyle = material;
    context.fill(outline.path);
    context.restore();
  }

  const gleamProgress = reduceMotion ? 0 : smoothStep(0.76, 0.92, progress);
  context.save();
  context.globalAlpha = bodyAlpha;
  drawHeartGloss(
    context,
    topcoatAlpha > 0.62 ? outline.path : frontClip,
    width,
    height,
    scale,
    healing,
    gleamProgress
  );
  context.restore();

  if (!reduceMotion) {
    context.save();
    context.globalAlpha = bodyAlpha;
    drawHeartCracks(context, null, null, width, height, scale, rotation, 1, healing);
    context.restore();
  }
  drawHeartOuterRim(
    context,
    outline.points,
    scale,
    bodyAlpha * (brokenVisibility * 0.24 + smoothStep(0.46, 0.96, healing))
  );
  if (!reduceMotion) {
    const sparkleProgress = smoothStep(0.81, 0.95, progress);
    drawHeartSparkles(context, width, height, scale, sparkleProgress);
  }

  drawHeartSqueezeAura(context, width, height, scale, squeeze, wholeVisibility);
  const handsVisibility = sceneAlpha * handsReveal * (1 - smoothStep(0.9, 1, progress) * 0.14);
  const occlusionVisibility = sceneAlpha * closedHandsVisibility * 0.96;
  drawHeartHandsOcclusion(context, width, height, scale, occlusionVisibility);
  drawOpenHeartHands(
    context,
    width,
    height,
    scale,
    leftSqueeze,
    rightSqueeze,
    handsVisibility * openHandsVisibility,
    mobile
  );
  drawClosedHeartHands(
    context,
    width,
    height,
    scale,
    handsVisibility * closedHandsVisibility,
    mobile
  );
};

const finishHeartIntro = (run) => {
  if (run !== heartIntroRun) return;
  window.clearTimeout(heartIntroTimer);
  heartIntroTimer = 0;
  cancelAnimationFrame(heartIntroFrame);
  heartIntroFrame = 0;
  heartIntro?.classList.remove("is-playing");
  if (heartIntro) {
    heartIntro.hidden = true;
    heartIntro.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("immersive-intro-active");
  const resolve = heartIntroResolve;
  heartIntroResolve = null;
  resolve?.();
};

const stopHeartIntro = () => {
  heartIntroRun += 1;
  window.clearTimeout(heartIntroTimer);
  heartIntroTimer = 0;
  cancelAnimationFrame(heartIntroFrame);
  heartIntroFrame = 0;
  heartIntro?.classList.remove("is-playing");
  if (heartIntro) {
    heartIntro.hidden = true;
    heartIntro.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("immersive-intro-active");
  const resolve = heartIntroResolve;
  heartIntroResolve = null;
  resolve?.();
};

const playHeartIntro = () => {
  if (!heartIntro) return Promise.resolve();

  stopHeartIntro();
  const run = ++heartIntroRun;
  const duration = reduceMotion ? 1200 : 5200;
  heartIntro.hidden = false;
  heartIntro.setAttribute("aria-hidden", "false");
  heartIntro.classList.remove("is-playing");
  void heartIntro.offsetWidth;
  heartIntro.classList.add("is-playing");
  document.body.classList.add("immersive-intro-active");

  return new Promise((resolve) => {
    heartIntroResolve = resolve;
    heartIntroTimer = window.setTimeout(() => finishHeartIntro(run), duration + 80);
  });
};

const enterImmersiveMode = () => {
  if (!immersiveShell || !mode3dButton || isImmersiveActive() || immersiveEntryPending) return;

  const entryToken = ++immersiveEntryToken;
  immersiveEntryPending = true;
  mode3dButton.setAttribute("aria-busy", "true");
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
  immersiveActiveScene = -1;
  resetImmersivePointer();

  const warmupPromise = warmImmersiveImages();
  const stageReadyPromise = new Promise((resolve) => {
    requestAnimationFrame(() => {
      refreshImmersiveMetrics(true);
      window.scrollTo(0, 0);
      updateImmersiveProgress();
      mode3dButton.focus({ preventScroll: true });
      resolve();
    });
  });

  const introPromise = stageReadyPromise.then(() => {
    if (entryToken !== immersiveEntryToken || !isImmersiveActive()) return;
    return playHeartIntro();
  });

  Promise.allSettled([warmupPromise, introPromise]).then(() => {
    if (entryToken !== immersiveEntryToken || !isImmersiveActive()) return;
    immersiveEntryPending = false;
    mode3dButton.removeAttribute("aria-busy");
  });
};

const exitImmersiveMode = () => {
  if (!immersiveShell || !mode3dButton || !isImmersiveActive()) return;

  immersiveEntryToken += 1;
  immersiveEntryPending = false;
  mode3dButton.removeAttribute("aria-busy");
  stopHeartIntro();
  document.body.classList.remove("immersive-active", "immersive-intro-active");
  cancelAnimationFrame(immersiveFrame);
  immersiveFrame = 0;
  setImmersiveExitReady(false);
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

const scheduleImmersiveWarmup = () => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(warmImmersiveImages, { timeout: 1800 });
  } else {
    window.setTimeout(warmImmersiveImages, 1200);
  }
};

if (document.readyState === "complete") {
  scheduleImmersiveWarmup();
} else {
  window.addEventListener("load", scheduleImmersiveWarmup, { once: true });
}

immersiveExit?.addEventListener("click", exitImmersiveMode);

window.addEventListener("scroll", scheduleImmersiveProgress, { passive: true });
window.addEventListener(
  "resize",
  () => {
    refreshImmersiveMetrics();
    scheduleImmersiveProgress();
  },
  { passive: true }
);
window.addEventListener(
  "orientationchange",
  () => {
    requestAnimationFrame(() => {
      refreshImmersiveMetrics(true);
      scheduleImmersiveProgress();
    });
  },
  { passive: true }
);

window.addEventListener(
  "pointermove",
  (event) => {
    if (
      reduceMotion ||
      !finePointer.matches ||
      !isImmersiveActive() ||
      (event.pointerType && event.pointerType !== "mouse")
    ) return;
    pointerX = clamp(event.clientX / Math.max(window.innerWidth, 1) - 0.5, -0.5, 0.5);
    pointerY = clamp(event.clientY / Math.max(window.innerHeight, 1) - 0.5, -0.5, 0.5);
    scheduleImmersivePointer();
  },
  { passive: true }
);

window.addEventListener("pointerleave", resetImmersivePointer, { passive: true });
window.addEventListener("pointercancel", resetImmersivePointer, { passive: true });

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
  "memory-walk.jpg": "Люблю кадры, где мы не стараемся быть идеальными — просто живые, смешные и вместе.",
  "memory-spa.jpg": "С тобой даже уход за собой превращается в наш маленький домашний ритуал.",
  "memory-winter-kiss.jpg": "Даже самый холодный вечер становится тёплым, когда мы так близко.",
  "memory-scarf-kiss.jpg": "Когда мы рядом, для целого мира хватает места под одним тёплым шарфом.",
  "memory-summer.jpg": "Тёплый воздух, деревья и мы — день, который хочется навсегда оставить с собой.",
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
