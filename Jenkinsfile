pipeline {
    agent any 
    stages {
        stage ('Clean Workspace') {
            steps { 
                cleanWs()
            }
        }
        stage ('Install') {
            steps { 
                nodejs('Node-v14.17.3') {
                    sh 'npm install'
                }
            }
        }
        stage ('Build') {
            steps { 
                nodejs('Node-v14.17.3') {
                    sh 'npm run build'
                }
            }
        }
    }
}
   