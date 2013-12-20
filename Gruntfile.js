module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            default: {
                files: [{
                    expand: true,
                    cwd:    'assets',
                    src:    ['img/*'], 
                    dest:   'english'
                }]
            },
        },
        multi_lang_site_generator: {
            default: {
                options: {
                    vocabs:             ['english'],
                    vocab_directory:    'assets',
                    template_directory: 'assets',
                },
                files: {
                    "category-handheld.html": "category-handheld.html.tmpl",
                    "category-website.html":  "category-website.html.tmpl",
                    "category-website-content-marketing-twitter.html":  "category-social-content-marketing-twitter.html.tmpl",
                    "category-website-content-marketing-facebook.html":  "category-social-content-marketing-facebook.html.tmpl"
                }
            },
        },
        watch: {
            default: {
                files: ["./assets/**/*"],
                tasks: ["default"],
                options: {
                    spawn: false,
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-multi-lang-site-generator');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',     ['multi_lang_site_generator:default', 'copy']);
};