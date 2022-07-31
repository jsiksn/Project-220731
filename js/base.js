

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
    var navilength = navidata.length; // 대메뉴 개수

    for(var i=0; i < navilength; i++ ){ // 다중처리
        navitag += "<li><a href='" + navidata[i].d1[1] +"'>" + navidata[i].d1[0] + "</a></li>"
    }
    $('#navi').html(navitag)
})