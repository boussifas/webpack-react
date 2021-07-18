pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo "install dependencies"
                sh 'sudo  apt update'
                sh 'sudo apt install npm'

                //sh 'npm install'
            }
        }

        // stage("test") {
        //     steps {
                
        //         sh 'npm test'
        //     }
        // }

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
