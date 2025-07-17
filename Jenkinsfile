pipeline {
	agent any 

	environment {
		REPO_URL='https://github.com/orvencasido/cicd-crud_07-17-2025.git'
		APP_DIR='crud-app'
	}

	stages {
		stage('Clone Repository') {
			steps {
				sh '''
					git clone ${REPO_URL} ${APP_DIR}
				'''
			}
		}
		stage('Build Docker Image') {
			steps {
				dir("${APP_DIR}") {
					sh 'docker compose build'
				}
			}	
		}
		stage('Run the App') {
			steps {
				dir("${APP_DIR}") {
                                        sh 'docker compose up -d'
                                }
			}
		}
	}
}
