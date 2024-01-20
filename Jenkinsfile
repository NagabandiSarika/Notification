pipeline {
    agent any
     environment {
        registry = "024579634030.dkr.ecr.ap-south-1.amazonaws.com/notification"
    }
   
    stages {
          stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/NagabandiSarika/Notification.git'
            }
        }
           stage('Building image') {
             steps{
                  script {
                   dockerImage = docker.build registry
                   }
      }
           }
    
            stage('Pushing to ECR') {
             steps{  
                  script {
               withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: '024579634030', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
    sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 024579634030.dkr.ecr.ap-south-1.amazonaws.com/notification'
     sh 'docker push 024579634030.dkr.ecr.ap-south-1.amazonaws.com/notification'
}

}
                  }
            }
             stage('stop previous containers') {
               steps {
            sh 'docker ps -f name=mypythonContainer -q | xargs --no-run-if-empty docker container stop'
            sh 'docker container ls -a -fname=mypythonContainer -q | xargs -r docker container rm'
         }
       }
            stage('Docker Run') {
              steps{
                   script {
                sh 'docker run -d -p 8000:8000 --rm --name mypythonContainer 024579634030.dkr.ecr.ap-south-1.amazonaws.com/notification'     
      }
    }
        }
    }
  }
