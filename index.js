module.exports = (robot) => {
  robot.on("issues.opened", async (context) => {
    const { body } = context.payload.issue;

    // create a comment
    const comment = context.issue({
      body: body.includes("Thanks") ? "You are Welcome!" : "Thanks!",
    });
    // publish it
    return context.github.issues.createComment(comment);
  });
};