

function Register(){
    return (
        <div style={{marginTop:"130px"}}>
             <div className="row">
                  <div className="col-sm-4">

                  </div>
                  <div className="col-sm-4" style={{backgroundColor:"greenyellow"}}>
                      <form >

                      <h4 class="modal-title text-center">Please Enter Your Register Details</h4>

                         <div class="form-floating mb-3 mt-3">
                             <input type="text" class="form-control" id="name" placeholder="Enter Name here" name="name" autocomplete="off"/>
                             <label for="name">Name</label>
                         </div> 

                         <div class="form-floating mb-3 mt-3">
                           <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" autocomplete="off"/>
                           <label for="email">Email</label>
                        </div>
                        <div class="form-floating mt-3 mb-3">
                           <input type="text" class="form-control" id="uname" placeholder="Enter  Username" name="uname" autocomplete="off"/>
                           <label for="uname">Username</label>
                        </div>  

                        <div class="form-floating mb-3 mt-3">
                           <input type="text" class="form-control" id="pass" placeholder="Enter Password here" name="pass" autocomplete="off"/>
                           <label for="pass">Password</label>
                        </div> 

                        <div class="d-grid mb-3">
                            <button type="button" class="btn btn-primary btn-block">Sumbit</button>
                       </div>
                    </form>
                  </div>
                  <div className="col-sm-4">

                  </div>
             </div>
        </div>
    )
} 

export default Register;