pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo "build stage"
                npm install
            }
        }

        stage("test") {
            steps {
                echo "test stage"
                npm test
            }
        }

        stage("deploy") {
            steps{
                echo "deploy"
                npm run build
            }
        }
    }
}