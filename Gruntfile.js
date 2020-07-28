module.exports = function (grunt) {
  grunt.initConfig({
    // Configuration to be run (and then tested).
    purgecss: {
      my_target: {
        options: {
          content: ["index.html", "game.html"],
          whitelist: [
            "is-active",
            "is-expanded",
            "aos-animate",
            "js-navbar",
            "js-sidebar",
            "js-hamburger-btn",
            "js-game-menu",
            "js-backdrop",
            "u-text-size--3xl@xs",
            "u-text-size--9xl@lg",
            "u-margin-x--none@md",
            "glide__bullet--active",
          ],
        },
        files: {
          "dist/css/app.css": ["css/style.css"],
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-purgecss");
  // grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Default tasks.
  grunt.registerTask("default", ["purgecss"]);
};
