var cauthu = ["ronaldo","messi","neymar"]
let bien = prompt("ban co muon sua ten cau thu khong: 'Y' or 'N'")
if(bien == "Y"){
    var vitri = Number(prompt("nhap vao vi tri cau thu muon doi ten (cau thu dau tien la vi tri 0)"))
    if(vitri > 2){
        alert("undefine!")
    }
    else{
        cauthu.splice(vitri, 1, prompt("nhap ten cau thu thay the"))
        alert(cauthu)
    }
}
else if(bien == "N"){
    alert("good bye!")
}
else{prompt("Moi ban nhap lai: 'Y' or 'N'")}
