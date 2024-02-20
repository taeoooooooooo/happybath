$(function(){
    // gnb li 메뉴의 갯수가 여러개이고 그 여러개 만큼 반복 실행할경우 each(function(인덱스번호, 앨리먼트))
    // 특정인덱스 번호와 일치하는 것을 찾을 때 eq()
    // gnb li에 마우스가 들어가면 mouseenter
    // 클래스 추가 addClass('on')
    // gnb li에서 마우스가 떠나가면 mouseleave
    // 클래스 제거 removeClass('on')

    $('#gnb > li').each(function(idx , item){
        $(item).mouseenter(function(){
            $('#gnb > li').eq(idx).addClass('on')
        })
        $(item).mouseleave(function(){
            $('#gnb > li').eq(idx).removeClass('on')
        })
    })

    // btn-open 을 클릭하면 모바일 gnb 활성화
    // btn-open 클릭상태 체크
    // 했는지안했는지 확인 의미로 변수생성  
    // isMgnb 라는 변수를 생성하고 (true) / (false) 값을 주어서 구분
    // .m-menu-area left: -100%;으로 화면 밖에 배치해서 안보이죠
    // .m-menu-area  left: 0 으로 이동되는 과정을 보여주겠다.
    // 과정 보여준다면
    // 1. csss로  transition
    // 2. 제이쿼리로 할 경우라면 animate()메소드로
    
    var isMgnb = false; 
    $('.btn-open').click(function(){
        if( isMgnb == false ){ // 닫혀있다면
            $('.m-menu-area').animate({'left':'0'},300) // 열어라
            isMgnb = true; // 열렸다고 표시해둬라
        }
    }) // 열기

    $('.btn-close').click(function(){
        console.log('cc')
        if( isMgnb == true ){ // 열려있다면
            $('.m-menu-area').animate({'left':'-100%'},300) // 닫아라
            isMgnb = false // 닫혔다고 표시해둬라
        }
    })// 닫기
    


})