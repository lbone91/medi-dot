pipeline {
    agent any
    tools {
        nodejs 'node-12.13.0'
    }
    options {
        // 오래된 빌드 로그 삭제
        buildDiscarder logRotator(artifactNumToKeepStr: '5', numToKeepStr: '5')
    }

    stages {
        stage('Configurations') {
            steps {
                sh 'npm config ls'
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Parallel Builds') {
            parallel {
                stage('Dev Environment') {
                    stages {
                        stage('Build') {
                            when { branch 'develop' }
                            steps {
                                sh 'npm run build:dev'
                            }
                        }
                        stage('Deploy') {
                            when { branch 'develop' }
                            steps {
                                withAWS(region: 'ap-northeast-2', credentials: 's3-bucket-access') {
                                    s3Delete(bucket: 'dev.dose-ease.com', path: 'index.html')
                                    s3Delete(bucket: 'dev.dose-ease.com', path: 'favicon.ico')
                                    s3Delete(bucket: 'dev.dose-ease.com', path: 'static/')
                                    s3Upload(file: 'dist/favicon.ico', bucket: 'dev.dose-ease.com', path: 'favicon.ico')
                                    s3Upload(file: 'dist/index.html', bucket: 'dev.dose-ease.com', path: 'index.html')
                                    s3Upload(file: 'dist/static/', bucket: 'dev.dose-ease.com', path: 'static/')
                                }
                            }
                        }
                    }
                }
                stage('Test Environment') {
                    stages {
                        stage('Build') {
                            when { branch 'master' }
                            steps {
                                sh 'npm run build:test'
                            }
                        }
                        stage('Deploy') {
                            when { branch 'master' }
                            steps {
                                withAWS(region: 'ap-northeast-2', credentials: 's3-bucket-access') {
                                    s3Delete(bucket: 'test.dose-ease.com-ssl', path: 'index.html')
                                    s3Delete(bucket: 'test.dose-ease.com-ssl', path: 'favicon.ico')
                                    s3Delete(bucket: 'test.dose-ease.com-ssl', path: 'static/')
                                    s3Upload(file: 'dist/favicon.ico', bucket: 'test.dose-ease.com-ssl', path: 'favicon.ico')
                                    s3Upload(file: 'dist/index.html', bucket: 'test.dose-ease.com-ssl', path: 'index.html')
                                    s3Upload(file: 'dist/static/', bucket: 'test.dose-ease.com-ssl', path: 'static/')
                                }
                            }
                        }

                    }
                }
                stage('Prod Environment') {
                    stages {
                        stage('Build') {
                            when { tag 'v*' }
                            steps {
                                sh 'npm run build:prod'
                            }
                        }
                        stage('Deploy') {
                            when { tag 'v*' }
                            steps {
                                withAWS(region: 'ap-northeast-2', credentials: 's3-bucket-access') {
                                    s3Delete(bucket: 'prod.dose-ease.com-ssl', path: 'index.html')
                                    s3Delete(bucket: 'prod.dose-ease.com-ssl', path: 'favicon.ico')
                                    s3Delete(bucket: 'prod.dose-ease.com-ssl', path: 'static/')
                                    s3Upload(file: 'dist/favicon.ico', bucket: 'prod.dose-ease.com-ssl', path: 'favicon.ico')
                                    s3Upload(file: 'dist/index.html', bucket: 'prod.dose-ease.com-ssl', path: 'index.html')
                                    s3Upload(file: 'dist/static/', bucket: 'prod.dose-ease.com-ssl', path: 'static/')
                                }
                            }
                        }

                    }
                }
            }
        }
    }
    post {
        unsuccessful {
            office365ConnectorSend message: "뭔가 문제가 있어요", status: 'FAILED', color: '#FF0000', webhookUrl: 'https://outlook.office.com/webhook/3dcb1d87-40f3-44f7-9ef8-05ad42af0cc7@813bddad-fdc2-434d-b0a0-9c831c139401/IncomingWebhook/0e684e2e6cb54c8485dd215a309e956b/92abbe80-147d-4a4f-b3fe-1b145c8d5e7a'
        }
    }
}