const navidata = [
    {link_product_list:"/category/야구잠바/24/"
    ,name:"야구잠바"
    ,param:"?cate_no=24"
    ,cate_no:24
    ,design_page_url:"product/list.html"
    },
    {link_product_list:"/category/반팔티/25/"
    ,name:"반팔티"
    ,param:"?cate_no=25"
    ,cate_no:25
    ,design_page_url:"product/list.html"
    },
    {link_product_list:"/category/단체티/26/"
    ,name:"단체티"
    ,param:"?cate_no=26"
    ,cate_no:26
    ,design_page_url:"product/list.html"
    }
    ]
// var navitext = "<a href='" + navidata[0].design_page_url + "'>" + navidata[0].name + "</a>"
// ex6 + 
// let navitext = `<a href="${navidata[0].design_page_url}">
//                    ${navidata[0].name}
//                 </a>`

// for(var i in navidata){ // navidata는 반드시 array
for(var i = 0; i < navidata.length; i++){
    if ( i == 0 ) console.log('----------')
    // 저 array를 하나하나 처리할때 발생하는 index를 저장할 변수 i
    console.log(navidata[i].name)
    if ( i == navidata.length - 1 ) console.log('----------')
}
