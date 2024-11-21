sudo amazon-linux-extras install epel -y
sudo yum install https://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
sudo yum install mysql-community-server
sudo systemctl enable mysqld
sudo systemctl start mysqld
sudo systemctl status mysqld
sudo cat /var/log/mysqld.log | grep "temporary password"
--reset password---
ALTER USER root@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
--end--
--Creta user--
CREATE USER 'goldz1'@'host' IDENTIFIED WITH authentication_plugin BY 'duyhoang1!';
ALTER USER 'goldz1'@'host' IDENTIFIED WITH caching_sha2_password BY 'Duyhoang1!';