$(function () {
    var APPLICATION_ID = "C2363073-8C3B-0C93-FF26-967C1BEF1800",
    SECRET_KEY = "FB43A048-05CB-F78E-FF04-19001DA98100",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    
    $(document).on('submit','.form-signin', function(event){
    event.preventDefault();
    
    var data = $(this).serializeArray(),
    email = data[0].value,
    password = data[1].vale;
    
    Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
   });
});

function Posts(args){
    args = args || {};
    this.title= args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}


