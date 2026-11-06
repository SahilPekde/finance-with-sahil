
(function () {
  // Comments and reactions temporarily disabled.
  // These features may be reintroduced later.

  document.querySelectorAll('[data-vote]').forEach(button => {
    button.remove();
  });

  const voteStatus = document.getElementById('vote-status');
  if (voteStatus) voteStatus.remove();

  const comments = document.getElementById('comments');
  if (comments) comments.remove();

  // Hide empty feedback containers, if present.
  document.querySelectorAll(
    '.feedback-section, #feedback, #reactions'
  ).forEach(section => section.remove());
})();
