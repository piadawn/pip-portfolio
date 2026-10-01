const tabs=[...document.querySelectorAll('[role="tab"]')];const panels=[...document.querySelectorAll('[role="tabpanel"]')];function selectTab(tab){tabs.forEach(t=>{const on=t===tab;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});panels.forEach(p=>p.hidden=p.id!==tab.getAttribute('aria-controls'))}tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();selectTab(tabs[n]);tabs[n].focus()}})});

// Load optional media while keeping a graceful fallback for missing files.
for (const slot of document.querySelectorAll("[data-project]")) {
  const config = window.PROJECT_MEDIA?.[slot.dataset.project];
  if (!config?.src) continue;
  const isVideo = config.type === "video";
  const media = document.createElement(isVideo ? "video" : "img");
  media.style.objectFit = config.fit === "contain" ? "contain" : "cover";
  if (isVideo) {
    media.controls = true;
    media.preload = "metadata";
    media.playsInline = true;
    media.setAttribute("aria-label", config.alt || "Project video");
    media.addEventListener("loadedmetadata", () => slot.classList.add("has-media"));
  } else {
    media.alt = config.alt || "Project image";
    media.loading = "lazy";
    media.decoding = "async";
    media.addEventListener("load", () => slot.classList.add("has-media"));
  }
  media.addEventListener("error", () => {
    slot.classList.remove("has-media");
    media.remove();
  });
  slot.append(media);
  media.src = config.src;
}

// Open the requested portfolio practice when arriving from a project page.
function selectLinkedPractice(){const tab=tabs.find(t=>'#'+t.getAttribute('aria-controls')===location.hash);if(tab){selectTab(tab);document.querySelector(location.hash)?.scrollIntoView({block:'start'});}}
selectLinkedPractice();
window.addEventListener('hashchange',selectLinkedPractice);
