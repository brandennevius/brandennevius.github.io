const features = {
  intelligence: {
    kicker: "INTELLIGENCE, WITH CONTEXT",
    title: "From a signal<br>to a useful next step.",
    description:
      "Lead scoring, client health signals, and a scoped copilot help a coach decide where to focus. Recommendations connect to contact context instead of living in a separate chat window.",
    points: [
      "Contact-scoped copilot and workspace assistant",
      "Lead and engagement signals in an action queue",
      "Suggest-only, guided, and policy-based modes",
    ],
    art: `<div class="art-topline">✧ CONTACT INTELLIGENCE <span class="art-chip">Guided mode</span></div><div class="signal-card"><div class="signal-heading"><span class="signal-symbol"><svg class="inline-icon" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 16 16 4M4 4h12v12"/></svg></span><div><b>A conversation worth continuing</b><small>Alex Morgan · Lead follow-up</small></div></div><p>A consultation request is waiting. Review the contact’s recent activity before choosing your next step.</p><div class="signal-context"><span>Consultation requested</span><span>Contact context</span><span>Suggested action</span></div><div class="signal-footer"><span>Recommendation → human review</span><span class="sample-action">Review follow-up <svg class="inline-icon" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 16 16 4M4 4h12v12"/></svg></span></div></div><div class="signal-trail"><span>◎ Contact signal</span><span>→</span><span>✧ Recommendation</span><span>→</span><span><svg class="inline-icon" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 16 16 4M4 4h12v12"/></svg> Action</span></div>`,
  },
  inbox: {
    kicker: "ONE CONVERSATION, MORE CONTEXT",
    title: "Every channel.<br>A shared client story.",
    description:
      "A unified messaging workspace brings email, SMS, and social conversations together with contact information, ownership, and timeline context. Less switching between tools to understand the next reply.",
    points: [
      "Channel connections and health visibility",
      "Contact linking and shared conversation ownership",
      "Client activity alongside the conversation",
    ],
    art: `<div class="art-topline">▤ UNIFIED INBOX <span class="art-chip">Email · SMS · Social</span></div><div class="inbox-art"><div class="inbox-people"><b>CONVERSATIONS</b><div class="inbox-person active">Alex Morgan<small>Email · Client</small></div><div class="inbox-person">Sam Taylor<small>SMS · Lead</small></div><div class="inbox-person">Casey Lee<small>Instagram · Lead</small></div></div><div class="chat-demo"><b>Alex Morgan</b><small>Client · Assigned to Jordan</small><div class="bubble">Can we move our check-in to Thursday? I have a question about my program.</div><div class="bubble reply">Absolutely. Let’s review your week together.</div><div class="chat-context">◎ Contact timeline · Program assigned · Check-in scheduled</div></div></div><div class="signal-trail"><span>Connect channels</span><span>→</span><span>Link identities</span><span>→</span><span>Keep context</span></div>`,
  },
  lifecycle: {
    kicker: "THE RELATIONSHIP, END TO END",
    title: "From first contact<br>to ongoing coaching.",
    description:
      "CRM, billing, onboarding, and program delivery share the same contact model. The product follows the relationship across the business instead of treating each stage as a disconnected tool.",
    points: [
      "Lead pipeline and contact activity timelines",
      "Stripe-powered packages and checkout flows",
      "Forms, programming, and client assignments",
    ],
    art: `<div class="art-topline">◎ CLIENT LIFECYCLE <span class="art-chip">Shared contact context</span></div><div class="pipeline-art"><div class="pipeline-column"><span>01 / CONNECT</span><div class="pipeline-card"><b>Sam Taylor</b><small>Discovery call</small><em>New lead</em></div></div><div class="pipeline-column"><span>02 / ONBOARD</span><div class="pipeline-card"><b>Casey Lee</b><small>Intake form sent</small><em>Getting started</em></div></div><div class="pipeline-column"><span>03 / DELIVER</span><div class="pipeline-card"><b>Alex Morgan</b><small>Program assigned</small><em>Active client</em></div></div></div><div class="signal-card"><div class="signal-heading"><span class="signal-symbol">◎</span><div><b>One relationship. A connected timeline.</b><small>Conversations · purchases · forms · programming</small></div></div></div>`,
  },
  workflows: {
    kicker: "AUTOMATION BEHIND THE EXPERIENCE",
    title: "Keep the handoffs<br>moving forward.",
    description:
      "A BullMQ-backed workflow engine connects triggers, scheduled steps, and execution timelines. The interface is only the visible part; queued work carries the operational process forward.",
    points: [
      "Multi-trigger workflow definitions",
      "Redis and BullMQ for asynchronous execution",
      "Scheduled steps and execution history",
    ],
    art: `<div class="art-topline">⌘ WORKFLOW ENGINE <span class="art-chip">Illustrative flow</span></div><div class="flow-node"><span>◎</span><div>Form submitted<small>Trigger · Contact intake</small></div></div><div class="flow-arrow">↓</div><div class="flow-node"><span><svg class="inline-icon" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M10 5v5l3 2M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg></span><div>Queue the next step<small>Redis + BullMQ · Scheduled execution</small></div></div><div class="flow-arrow">↓</div><div class="flow-split"><div class="flow-node"><span>✓</span><div>Create a task<small>Follow-up action</small></div></div><div class="flow-node"><span>▤</span><div>Send a message<small>Connected channel</small></div></div></div>`,
  },
};
const tabs = [...document.querySelectorAll("[data-feature]")];
function selectFeature(tab, focus = false) {
  const feature = features[tab.dataset.feature];
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  document
    .getElementById("feature-panel")
    .setAttribute("aria-labelledby", tab.id);
  document.getElementById("feature-kicker").textContent = feature.kicker;
  document.getElementById("feature-title").innerHTML = feature.title;
  document.getElementById("feature-description").textContent =
    feature.description;
  document.getElementById("feature-points").replaceChildren(
    ...feature.points.map((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      return li;
    }),
  );
  document.getElementById("feature-art").innerHTML = feature.art;
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectFeature(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index + tabs.length - 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectFeature(tabs[next], true);
    }
  });
});
selectFeature(tabs[0]);
