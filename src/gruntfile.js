/// <binding AfterBuild='bundle' />
// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
    grunt.initConfig({
        //bower: {
        //    install: {
        //        options: {
        //            targetDir: "wwwroot/lib",
        //            layout: "byComponent",
        //            cleanTargetDir: false
        //        }
        //    }
        //},
        //cssmin:
        //{
        //    build:
        //    {
        //        src: "../../artifacts/app.css",
        //        dest: "../../artifacts/app.min.css"
        //    }
        //},
        copy:
        {
            less:
            {
                files:
                [
                    {
                        expand: true,
                        src: ["components/**/*.less"],
                        dest: "../artifacts/"
                    }
                ]
            }
        },
        less:
        {
            build:
            {
                files:
                [
                    {
                        expand: true,
                        cwd: "",
                        src: ["components/**/*.less"],
                        dest: "../artifacts/",
                        ext: ".css",
                        extDot: "first"
                    }
                ]
            }
        },
        typescript:
        {
            build:
            {
                options:
                {
                    target: "ES5"
                },
                files:
                [
                    {
                        src: ["components/**/*.ts"],
                        dest: "../artifacts/"
                    }
                ]
            }
        }
    });

    grunt.registerTask("bundle", ["typescript:build", "less:build", "copy:less"]);

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
};