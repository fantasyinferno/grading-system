module.exports={
check_login:function(pool,username,password)
        {
          return new Promise((resolve,reject)=>{
          let sql = "SELECT * FROM tblogin WHERE username ='"+username+"'";
          pool.query(sql,(error,result)=>{
            if (error) {console.log(error);return reject("Dang nhap that bai !");}
            if(result&&result.length)
            {

              if(password==result[0].password)
              {
                  resolve(result);
              }
              else {return reject("Dang nhap that bai !");}
            }
            else {return reject("Khong ton tai tai khoan !");}
        });
      });
  },
check_login_csv:function(username,password)
        {
            return new Promise((resolve,reject)=>{
              let line_reader=require('line-reader');
              let file_data=__dirname+"/DataStudent/Account.csv";
              line_reader.eachLine(file_data,function(line,last)
              {
                if(line.split(',')[1]==username)
                {
                  if(line.split(',')[2]==password)
                  {
                    return resolve(line);
                  }
                  else return reject("Wrong password");
                }
                if(last)
                {
                  if(line.split(',')[1]==username)
                  {
                    if(line.split(',')[2]==password)
                    {
                      return resolve(line);
                    }
                    else return reject("Wrong password");
                  }
                  else return reject("Wrong username");
                }
              });
            });
        },
  wait_for_second:function(ms,after_wait)
  {
      let start = new Date().getTime();
      let end = start;
      while(end < start + ms) {
      end = new Date().getTime();
      }
      after_wait();
  }
}
