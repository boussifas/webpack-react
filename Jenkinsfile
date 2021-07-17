pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                //echo "build stage"
                sh 'npm install'
            }
        }

        stage("test") {
            steps {
                //echo "test stage"
                sh 'npm test'
            }
        }

        stage("deploy") {
            steps{
                echo "deploy"
                sh 'npm run build'
            }
        }
    }
    post {
        always {
           echo "terminated ....."
        }
    }
}
