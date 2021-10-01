
        function myadd() {
            let task = document.getElementById('task').value;
            let status = document.getElementById('status').value;
            let prior = document.getElementById('prior').value;
            let date = document.getElementById('date').value;
            let head = document.getElementById('head');
            console.log(task);
            console.log(status);
            console.log(prior);
            console.log(date);



            // localStorage.setItem('name' , name);
            // localStorage.setItem('email' , email);
            // localStorage.setItem('psw' , psw);



            if (task !== '' && status !== 'none' && prior !== 'none' && date !== '') {
                let user_record = new Array();
                user_record = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

                user_record.push({
                    'task': task,
                    'status': status,
                    'prior': prior,
                    'date': date,

                })
                localStorage.setItem('user', JSON.stringify(user_record));
                head.style.display = 'none';
                restform()

            } else {
                head.style.display = 'block';
            }



            // console.log(localstorage.getItem('user'));






        }
        
        function myshow() {
            const d = new Date();
            let year = d.getFullYear();
            let moun = d.getMonth();
            let ddate = d.getDate();

            let fulldate = year + '-0' + (moun + 1) + '-' + (ddate);

            document.getElementById("mytbody").innerHTML = "";
            let user_record = new Array();

            user_record = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []





            if (user_record) {
                for (let i = 0; i < user_record.length; i++) {
                    let myshow = user_record[i].date;


                    if (fulldate == myshow) {
                        let addDiv = document.createElement('tr');
                        addDiv.className += "mytr";


                        addDiv.innerHTML = ` 
                    <td>`+ user_record[i].task + `</td>
                        <td>`+ user_record[i].status + `</td>
                        <td>`+ user_record[i].prior + `</td>
                        <td>`+ user_record[i].date + `</td>
                        
                        <td ><a onclick="edittask(${i})" class="btn btn-outline-primary">Edit </a> </td>
                        <td><a onclick="ondel(${i})" class="btn btn-outline-primary">Delete </a></td>`;
                        document.getElementById("mytbody").appendChild(addDiv);

                    } else {
                        console.log('no');
                    }



                }
            }


        }
        function ondel(i) {

            let webtask = localStorage.getItem('user');
            console.log(webtask);
            let taskobj = JSON.parse(webtask);
            console.log(taskobj);
            taskobj.splice(i, 1);
            localStorage.setItem('user', JSON.stringify(taskobj));

            // var delitem = JSON.parse()
            // delitem.splice(i, 1);
            // localStorage.setItem('user', JSON.stringify(delitem));
            // var key = document.getElementById('fullName').value; //gets key from user
            // localStorage.removeItem(key) //passes key to the removeItem method
            // console.log("remove items");

            myshow()

        }
        function edittask(i) {
            let edittaskk, editstatus, editprior, editdate;
            edittaskk = document.getElementById('task');
            editstatus = document.getElementById('status');
            editprior = document.getElementById('prior');
            editdate = document.getElementById('date');


            let saveindex = document.getElementById("saveindex");
            let editdiv = document.getElementById('editdiv');
            let submitbtn= document.getElementById('submitbtn');
            let addedittask= document.getElementById('addtaskbtn');

            saveindex.value = i;
            console.log(saveindex.value);
            let webtask = localStorage.getItem('user');
            let taskObj = JSON.parse(webtask);

            // addtaskinput.value = taskObj[index]['task_name'];
            edittaskk.value = taskObj[i]['task'];
            console.log(taskObj[i]['task']);
            console.log(edittaskk);
            editstatus.value = taskObj[i]['status'];
            editprior.value = taskObj[i]['prior'];
            editdate.value = taskObj[i]['date'];

            submitbtn.style.display='none';
            addedittask.style.display='block';

            

        }
        

        
        function task() {

            let edittaskk, editstatus, editprior, editdate;
            edittaskk = document.getElementById('task');
            editstatus = document.getElementById('status');
            editprior = document.getElementById('prior');
            editdate = document.getElementById('date');


            let webtask = localStorage.getItem("user");
            let taskObj = JSON.parse(webtask);
            let saveindex = document.getElementById("saveindex").value;
            let submitbtn= document.getElementById('submitbtn');
            let addedittask= document.getElementById('addtaskbtn');
            
            // taskObj[saveindex] = 

            for (keys in taskObj[saveindex]) {
                if (keys == 'task') {
                    // taskObj[saveindex].task_name = addtaskinput.value;

                    taskObj[saveindex]['task'] = edittaskk.value;
                    taskObj[saveindex]['status'] = editstatus.value;
                    taskObj[saveindex]['prior'] = editprior.value;
                    taskObj[saveindex]['date'] = editdate.value;



                }
                // if(keys == 'email'){
                //     taskObj[saveindex].email = email;
                // }
                // if(keys == 'mobile'){
                //     taskObj[saveindex].mobile = mobile;
                // }
                // if(keys == 'state'){
                //     taskObj[saveindex].state = state;
                // }
                // if(keys == 'city'){
                //     taskObj[saveindex].city = city;
                // }
            }
            // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
            //  taskObj[saveindex][task_name] = addtaskinput.value;

            localStorage.setItem("user", JSON.stringify(taskObj));
            restform();
            submitbtn.style.display='block';
            addedittask.style.display='none';
            myshow();

            
        }
        function restform() {
            document.getElementById("taskform").reset();

        }