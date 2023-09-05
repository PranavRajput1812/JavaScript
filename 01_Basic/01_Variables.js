const accountId = 1122; ///cannot be change further
let accountEmail = "hi123@gmail.com" //can change further
var accountPassword  ="12123" //scope problem and it is add to object {Prefer not to use Var
//                                                                              because of issues in block scope and functional scope} 
//accountId = 333; // not allowed becaue of constant is used to initlize and not update
//console.log(accountId);
accountEmail ="hello@gmail.com"
accountCity = "Kolhapur" /// declare variable without name
let accountState; //it will return undefined

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);//show in tabuler format.
/*
    if we declare variable but not intilize variables then it is gives undefined as output.
*/