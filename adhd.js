function breakDownTask() {
  const input = document.getElementById("taskInput").value.trim();
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (!input) return;

  const steps = [
    `Look at "${input}" and take a deep breath. Just observe, no pressure.`,
    `Pick up one thing from "${input}" and put it away. Just one.`,
    `Now grab a trash bag — is there anything from "${input}" to throw out?`,
    `Can you clear a tiny part of the floor or a corner in "${input}"?`,
    `If you're still feeling okay, do one more small thing. If not, that's okay. 💗`,
  ];

  steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    taskList.appendChild(li);
  });
}

function showBoost() {
  const boosts = [
    "Just making your bed is enough to shift the vibe. Start there.",
    "A clean space helps you breathe — but even 5% progress counts.",
    "You don’t have to clean the whole room. Just one item, then rest.",
    "Your space doesn’t have to be perfect to feel better.",
    "Throwing away trash = progress. That’s all it takes sometimes.",
    "You are not messy. Your brain just works differently. Be kind to it. 💗",
    "You’ve cleaned before and you’ll do it again. Trust yourself.",
    "Want to do this together in spirit? I believe in you.",
    "You are safe, loved, and doing your best. That’s enough.",
    "Maria sees how hard you’re trying. She’s proud of you. 💚"
  ];

  const boost = boosts[Math.floor(Math.random() * boosts.length)];
  document.getElementById("boostText").textContent = boost;
}