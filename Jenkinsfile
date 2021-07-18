pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage("build") {
            steps {
                echo "install dependencies"
                sh 'npm install'
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
