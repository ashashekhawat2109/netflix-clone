pipeline {
    agent any

    environment {
        IMAGE_NAME = 'netflix-clone:jenkins'
        CLUSTER_NAME = 'netflix-cluster'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Netflix Clone source code ready'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Load Image into Kubernetes') {
            steps {
                sh 'kind load docker-image ${IMAGE_NAME} --name ${CLUSTER_NAME}'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
                sh 'kubectl set image deployment/netflix-deployment netflix-container=${IMAGE_NAME}'
                sh 'kubectl rollout status deployment/netflix-deployment'
            }
        }
    }

    post {
        success {
            echo 'Netflix Clone deployed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check console output.'
        }
    }
}
