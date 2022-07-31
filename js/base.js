

var navidata = [
    {
        d1 : ['회사소개', 'company.html'],
        d2 : [
            ['비전', 'vision.html'],
            ['인사말', 'intro.html'],
            ['주요연혁', 'history.html'],
            ['CI 소개', 'ci.html'],
            ['찾아오시는길', 'location.html']
        ]
    },
    {
        d1 : ['사업영역', 'business.html'],
        d2 : [
            ['소재사업', 'material.html'],
            ['포장설비 엔지니어랑', 'engineering.html']
        ]
    },
    {
        d1 : ['NEWS', 'news.html'],
        d2 : [
        ]
    },
    {
        d1 : ['구매조달시스템', 'buy.html'],
        d2 : [
        ]
    }
]

// console.log(navidata[1].d2[0][0],navidata[1].d2[0][1])

$(document).ready(function(){
    var navitag = '';
    // var navilength = navidata.length; // 대메뉴 개수

    for(var i in navidata){
    // for(var i=0; i < navilength; i++ ){ // 다중처리
        navitag += "<li><a href='" + navidata[i].d1[1] +"'>" + navidata[i].d1[0] + "</a>"
        for(var j in navidata[i].d2){
            // forin 문: index번호를 받을 변수 앞자리, Array 객체
            // navidata 객체의 d2 변수가 비어 있다면 처리 안함
            // 소메뉴가 없는 데이터는 처리 안함
            // navidata[i] 각 메뉴마다 d2[j] 소메뉴마다
            if( j == 0 ) navitag += "<ul>"
            navitag += "<li><a href='" + navidata[i].d2[j][1] +"'>" + navidata[i].d2[j][0] + "</a>"
            if( j == navidata[i].d2.length - 1 ) navitag += "</ul>"

        }
        navitag += "</li>"
    }
    $('#navi').html(navitag) // 화면에 출력
})