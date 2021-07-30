var Myansewrs = document.getElementsByClassName('answer'),
    Mybutton_0 = document.getElementById('1'),
    Mybutton_1 = document.getElementById('2'),
    Mybutton_2 = document.getElementById('3'),
    Mybutton_3 = document.getElementById('4');
Mybutton_0.onclick = function() {
    Myansewrs[0].classList = Myansewrs[0].classList[0] + ' show';
    Myansewrs[1].classList = Myansewrs[1].classList[0] + ' hidden';
    Myansewrs[2].classList = Myansewrs[2].classList[0] + ' hidden';
    Myansewrs[3].classList = Myansewrs[3].classList[0] + ' hidden';
};
Mybutton_1.onclick = function() {
    Myansewrs[0].classList = Myansewrs[0].classList[0] + ' hidden';
    Myansewrs[1].classList = Myansewrs[1].classList[0] + ' show';
    Myansewrs[2].classList = Myansewrs[2].classList[0] + ' hidden';
    Myansewrs[3].classList = Myansewrs[3].classList[0] + ' hidden';
};
Mybutton_2.onclick = function() {
    Myansewrs[0].classList = Myansewrs[0].classList[0] + ' hidden';
    Myansewrs[1].classList = Myansewrs[1].classList[0] + ' hidden';
    Myansewrs[2].classList = Myansewrs[2].classList[0] + ' show';
    Myansewrs[3].classList = Myansewrs[3].classList[0] + ' hidden';
};
Mybutton_3.onclick = function() {
    Myansewrs[0].classList = Myansewrs[0].classList[0] + ' hidden';
    Myansewrs[1].classList = Myansewrs[1].classList[0] + ' hidden';
    Myansewrs[2].classList = Myansewrs[2].classList[0] + ' hidden';
    Myansewrs[3].classList = Myansewrs[3].classList[0] + ' show';
};