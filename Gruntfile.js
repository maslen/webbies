module.exports = function (grunt) {

    var webbies_year = '2014';

    grunt.initConfig({
        copy: {
            default: {
                files: [{
                    expand: true,
                    cwd:    'assets/' + webbies_year,
                    src:    ['img/**'], 
                    dest:   'english'
                }]
            },
        },
        multi_lang_site_generator: {
            default: {
                options: {
                    vocabs:             ['english'],
                    vocab_directory:    'assets/' + webbies_year,
                    template_directory: 'assets/' + webbies_year,
                    data: {
                        img_url: 'img/bbc-news-logo.jpg'
                    }
                },
                files: {
                    "category-website.html":      "category-website.html.tmpl",
                    "category-social-media.html": "category-social-media.html.tmpl",
                    "category-mobile.html":       "category-mobile.html.tmpl"
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
    grunt.registerTask('default', ['multi_lang_site_generator:default', 'copy']);
};