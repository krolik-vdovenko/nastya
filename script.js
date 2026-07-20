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
const immersiveProgressFill = immersiveShell?.querySelector(".immersive-progress-fill");
const immersiveCounterCurrent = immersiveShell?.querySelector(".immersive-counter-current");
const immersiveCounterTotal = immersiveShell?.querySelector(".immersive-counter-total");
const immersiveExit = immersiveShell?.querySelector(".immersive-exit");
const heartIntro = immersiveShell?.querySelector(".heart-intro");
const heartIntroCanvas = heartIntro?.querySelector(".heart-intro-canvas");
const heartIntroContext = heartIntroCanvas?.getContext("2d", { alpha: true });
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
let heartIntroRun = 0;
let heartIntroResolve = null;
let immersiveEntryToken = 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const isImmersiveActive = () => document.body.classList.contains("immersive-active");
const setInlineProperty = (element, property, value) => {
  if (element.style.getPropertyValue(property) !== value) {
    element.style.setProperty(property, value);
  }
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
  if (immersiveActiveScene >= 0 && Math.abs(scenePosition - immersiveActiveScene) < 0.56) {
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
    const sceneFadeRange = 0.94;
    const opacity = absoluteDistance >= sceneFadeRange
      ? 0
      : Math.pow(Math.cos((absoluteDistance / sceneFadeRange) * Math.PI * 0.5), 0.82);
    const presence = clamp(1 - absoluteDistance / sceneFadeRange, 0, 1);
    const scale = clamp(1 - absoluteDistance * 0.048, 0.92, 1);

    setInlineProperty(scene, "--scene-opacity", opacity.toFixed(4));
    setInlineProperty(scene, "--scene-presence", presence.toFixed(4));

    if (isNearby) {
      setInlineProperty(scene, "--scene-y", `${(distance * stageHeight * 0.22).toFixed(2)}px`);
      setInlineProperty(scene, "--scene-card-shift", `${(-distance * 46).toFixed(2)}px`);

      if (!flatMode) {
        setInlineProperty(scene, "--scene-z", `${(-absoluteDistance * 290).toFixed(2)}px`);
        setInlineProperty(scene, "--scene-rotate-x", `${(-distance * 3.2).toFixed(3)}deg`);
        setInlineProperty(scene, "--scene-scale", scale.toFixed(4));
      }
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
    x: (16 * sin * sin * sin) / 17,
    y: (-rawY / 17 - 0.35) * 1.35,
  };
};

const createHeartMesh = () => {
  const segments = 30;
  const rings = 8;
  const vertices = [];
  const triangles = [];
  const groups = Array.from({ length: 20 }, (_, index) => {
    const sector = index % 10;
    const band = Math.floor(index / 10);
    const angle = (sector / 10) * Math.PI * 2 - Math.PI * 0.5;
    const noise = Math.sin((index + 2) * 12.9898) * 0.5 + 0.5;
    const distance = 1.1 + noise * 0.85 + band * 0.22;

    return {
      center: { x: 0, y: 0, z: 0 },
      count: 0,
      offset: {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance * 0.88,
        z: (Math.sin(index * 5.31) * 0.5 + 0.5) * 1.8 - 0.9,
      },
      rotation: {
        x: (Math.sin(index * 2.17) * 0.5 + 0.5) * 1.9 - 0.95,
        y: (Math.sin(index * 4.73) * 0.5 + 0.5) * 2.2 - 1.1,
        z: (Math.sin(index * 7.11) * 0.5 + 0.5) * 2.4 - 1.2,
      },
    };
  });

  for (let ring = 0; ring <= rings; ring += 1) {
    const radius = ring / rings;
    for (let segment = 0; segment < segments; segment += 1) {
      const boundary = heartBoundaryPoint((segment / segments) * Math.PI * 2);
      const easedRadius = Math.pow(radius, 0.92);
      vertices.push({
        x: boundary.x * easedRadius,
        y: boundary.y * easedRadius,
        z: 0.46 * Math.pow(1 - radius, 0.62),
      });
    }
  }

  const addTriangle = (a, b, c, ring, side = false) => {
    const center = {
      x: (vertices[a].x + vertices[b].x + vertices[c].x) / 3,
      y: (vertices[a].y + vertices[b].y + vertices[c].y) / 3,
      z: (vertices[a].z + vertices[b].z + vertices[c].z) / 3,
    };
    const angle = Math.atan2(center.y, center.x) + Math.PI * 0.5;
    const sector = ((Math.floor(((angle + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2) * 10) % 10) + 10) % 10;
    const group = sector + (ring / rings > 0.56 ? 10 : 0);
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
    vertices.push({ x: boundary.x, y: boundary.y, z: -0.24 });
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

  return { vertices, triangles, groups };
};

const heartMesh = createHeartMesh();

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

const transformHeartVertex = (vertex, group, scattered, heartRotation) => {
  const local = {
    x: vertex.x - group.center.x,
    y: vertex.y - group.center.y,
    z: vertex.z - group.center.z,
  };
  const shardRotation = rotateHeartPoint(
    local,
    group.rotation.x * scattered,
    group.rotation.y * scattered,
    group.rotation.z * scattered
  );
  const assembled = {
    x: shardRotation.x + group.center.x + group.offset.x * scattered,
    y: shardRotation.y + group.center.y + group.offset.y * scattered,
    z: shardRotation.z + group.center.z + group.offset.z * scattered,
  };

  return rotateHeartPoint(assembled, heartRotation.x, heartRotation.y, heartRotation.z);
};

const projectHeartPoint = (point, width, height, scale) => {
  const camera = 5.2;
  const perspective = camera / Math.max(3.5, camera - point.z);

  return {
    x: width * 0.5 + point.x * scale * perspective,
    y: height * (width < 620 ? 0.43 : 0.48) + point.y * scale * perspective,
    z: point.z,
  };
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

const drawHeartCracks = (context, width, height, scale, rotation, assembly, healing) => {
  if (assembly < 0.7 || healing >= 0.995) return;

  const crackPaths = [
    [[-0.02, -0.49], [0.06, -0.3], [-0.04, -0.14], [0.1, 0.02], [-0.035, 0.22], [0.02, 0.51]],
    [[-0.035, -0.14], [-0.22, -0.02], [-0.34, 0.13]],
    [[0.1, 0.02], [0.29, 0.11], [0.39, 0.25]],
    [[-0.035, 0.22], [-0.19, 0.31], [-0.25, 0.43]],
  ];
  const remaining = 1 - healing;
  const crackAlpha = smoothStep(0.7, 0.94, assembly) * remaining;

  context.save();
  context.lineCap = "round";
  context.lineJoin = "round";
  crackPaths.forEach((path, pathIndex) => {
    const points = path.map(([x, y]) => {
      const radius = clamp(Math.hypot(x, y) / 0.78, 0, 1);
      const point = rotateHeartPoint({ x, y, z: 0.47 * Math.pow(1 - radius, 0.65) + 0.016 }, rotation.x, rotation.y, rotation.z);
      return projectHeartPoint(point, width, height, scale);
    });

    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.setLineDash([scale * 0.08, scale * 0.025]);
    context.lineDashOffset = healing * scale * (0.42 + pathIndex * 0.06);
    context.strokeStyle = `rgba(24, 0, 8, ${0.92 * crackAlpha})`;
    context.lineWidth = Math.max(1, scale * (0.023 - healing * 0.013));
    context.shadowColor = `rgba(255, 54, 91, ${0.9 * remaining})`;
    context.shadowBlur = scale * 0.045 * remaining;
    context.stroke();

    context.setLineDash([]);
    context.strokeStyle = `rgba(255, 94, 124, ${0.55 * crackAlpha})`;
    context.lineWidth = Math.max(0.7, scale * 0.006);
    context.shadowBlur = 0;
    context.stroke();
  });
  context.restore();
};

const drawHeartSparkles = (context, width, height, scale, progress) => {
  const visibility = Math.sin(clamp(progress, 0, 1) * Math.PI);
  if (visibility <= 0.001) return;

  context.save();
  context.globalCompositeOperation = "screen";
  for (let index = 0; index < 18; index += 1) {
    const seed = index * 9.73;
    const angle = seed * 0.71;
    const distance = scale * (0.68 + (Math.sin(seed) * 0.5 + 0.5) * 0.62);
    const travel = progress * scale * (0.08 + (index % 4) * 0.016);
    const x = width * 0.5 + Math.cos(angle) * (distance + travel);
    const y = height * (width < 620 ? 0.43 : 0.48) + Math.sin(angle) * (distance * 0.72 + travel);
    const size = (2.2 + (index % 5) * 0.75) * visibility;
    const alpha = visibility * (0.28 + (index % 3) * 0.2);

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

const renderHeartIntro = (progress) => {
  if (!heartIntroContext) return;

  const size = resizeHeartIntroCanvas();
  if (!size) return;
  const { width, height } = size;
  const context = heartIntroContext;
  const mobile = width < 620;
  const scale = Math.min(width * (mobile ? 0.43 : 0.26), height * (mobile ? 0.3 : 0.32));
  const assembly = reduceMotion ? 1 : easeOutQuint((progress - 0.08) / 0.5);
  const healing = reduceMotion ? 1 : smoothStep(0.57, 0.78, progress);
  const reveal = reduceMotion ? smoothStep(0.02, 0.2, progress) : smoothStep(0.1, 0.56, progress);
  const finish = smoothStep(reduceMotion ? 0.68 : 0.88, 1, progress);
  const scattered = Math.pow(1 - assembly, 1.12);
  const rotation = {
    x: -0.08 + assembly * 0.04 + Math.sin(progress * Math.PI * 2) * 0.018,
    y: -0.42 + assembly * 0.54 + Math.sin(progress * Math.PI) * 0.05,
    z: -0.035 + assembly * 0.035,
  };

  heartIntro?.style.setProperty("--heart-intro-reveal", reveal.toFixed(4));
  heartIntro?.style.setProperty("--heart-intro-finish", finish.toFixed(4));
  if (progress >= (reduceMotion ? 0.36 : 0.72)) heartIntro?.classList.add("is-healed");

  context.clearRect(0, 0, width, height);
  const drawable = heartMesh.triangles.map((triangle) => {
    const group = heartMesh.groups[triangle.group];
    const points3d = [triangle.a, triangle.b, triangle.c].map((index) =>
      transformHeartVertex(heartMesh.vertices[index], group, scattered, rotation)
    );
    return {
      ...triangle,
      points3d,
      points2d: points3d.map((point) => projectHeartPoint(point, width, height, scale)),
      depth: points3d.reduce((sum, point) => sum + point.z, 0) / 3,
    };
  }).sort((a, b) => a.depth - b.depth);

  context.save();
  context.globalAlpha = smoothStep(0.015, 0.16, progress) * (1 - finish * 0.72);
  drawable.forEach((triangle) => {
    const [a3, b3, c3] = triangle.points3d;
    const edge1 = { x: b3.x - a3.x, y: b3.y - a3.y, z: b3.z - a3.z };
    const edge2 = { x: c3.x - a3.x, y: c3.y - a3.y, z: c3.z - a3.z };
    const normal = {
      x: edge1.y * edge2.z - edge1.z * edge2.y,
      y: edge1.z * edge2.x - edge1.x * edge2.z,
      z: edge1.x * edge2.y - edge1.y * edge2.x,
    };
    const normalLength = Math.max(0.0001, Math.hypot(normal.x, normal.y, normal.z));
    const light = clamp((normal.x * -0.28 + normal.y * -0.42 + Math.abs(normal.z) * 0.92) / normalLength, 0, 1);
    const facet = (triangle.group % 5) * 1.4;
    const lightness = triangle.side ? 17 + light * 16 : 24 + light * 30 + facet + healing * 7;
    const saturation = triangle.side ? 58 : 70 + healing * 8;
    const [a, b, c] = triangle.points2d;

    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
    context.closePath();
    context.fillStyle = `hsl(${344 + triangle.group * 0.32} ${saturation}% ${lightness}%)`;
    context.fill();
    context.strokeStyle = `rgba(255, 188, 203, ${triangle.side ? 0.025 : 0.055 + healing * 0.035})`;
    context.lineWidth = 0.72;
    context.stroke();
  });
  context.restore();

  drawHeartCracks(context, width, height, scale, rotation, assembly, healing);
  const sparkleProgress = smoothStep(reduceMotion ? 0.3 : 0.73, reduceMotion ? 0.82 : 0.94, progress);
  drawHeartSparkles(context, width, height, scale, sparkleProgress);
};

const finishHeartIntro = (run) => {
  if (run !== heartIntroRun) return;
  cancelAnimationFrame(heartIntroFrame);
  heartIntroFrame = 0;
  heartIntro?.classList.remove("is-healed");
  if (heartIntro) {
    heartIntro.hidden = true;
    heartIntro.setAttribute("aria-hidden", "true");
    heartIntro.style.removeProperty("--heart-intro-reveal");
    heartIntro.style.removeProperty("--heart-intro-finish");
  }
  document.body.classList.remove("immersive-intro-active");
  const resolve = heartIntroResolve;
  heartIntroResolve = null;
  resolve?.();
};

const stopHeartIntro = () => {
  heartIntroRun += 1;
  cancelAnimationFrame(heartIntroFrame);
  heartIntroFrame = 0;
  heartIntro?.classList.remove("is-healed");
  if (heartIntro) {
    heartIntro.hidden = true;
    heartIntro.setAttribute("aria-hidden", "true");
    heartIntro.style.removeProperty("--heart-intro-reveal");
    heartIntro.style.removeProperty("--heart-intro-finish");
  }
  document.body.classList.remove("immersive-intro-active");
  const resolve = heartIntroResolve;
  heartIntroResolve = null;
  resolve?.();
};

const playHeartIntro = () => {
  if (!heartIntro || !heartIntroCanvas || !heartIntroContext) return Promise.resolve();

  stopHeartIntro();
  const run = ++heartIntroRun;
  const duration = reduceMotion ? 920 : 4700;
  const start = performance.now();
  heartIntro.hidden = false;
  heartIntro.setAttribute("aria-hidden", "false");
  heartIntro.classList.remove("is-healed");
  document.body.classList.add("immersive-intro-active");

  return new Promise((resolve) => {
    heartIntroResolve = resolve;
    const frame = (timestamp) => {
      if (run !== heartIntroRun || !isImmersiveActive()) return;
      const progress = clamp((timestamp - start) / duration, 0, 1);
      renderHeartIntro(progress);
      if (progress < 1) {
        heartIntroFrame = requestAnimationFrame(frame);
      } else {
        finishHeartIntro(run);
      }
    };
    renderHeartIntro(0);
    heartIntroFrame = requestAnimationFrame(frame);
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

  const introPromise = playHeartIntro();
  const warmupPromise = warmImmersiveImages();
  Promise.allSettled([introPromise, warmupPromise]).then(() => {
    if (entryToken !== immersiveEntryToken) return;
    immersiveEntryPending = false;
    mode3dButton.removeAttribute("aria-busy");
  });

  requestAnimationFrame(() => {
    refreshImmersiveMetrics(true);
    window.scrollTo(0, 0);
    updateImmersiveProgress();
    mode3dButton.focus({ preventScroll: true });
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
