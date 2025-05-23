// 00. a 속성 제거 ( a 클릭시 위로 튕기는 현상 제거 )
$(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
});

// 01. 스플리팅 호출
$(function () {
    Splitting();
});

// 02. 헤더 영역 스크롤 방향 이벤트
$(function () {
    var prevScrollTop = 0;

    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop();

        if (nowScrollTop > prevScrollTop) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }

        prevScrollTop = nowScrollTop;
    });
});

// 03. scrolla.js
$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false,
    });
});

// 04. con01 gsap 애니메이션
$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con01",
            start: "0% 80%", // 트리거 대상, 브라우저
            end: "100% 100%", // 트리거 대상, 브라우저
            scrub: 1,
            // markers: true,
        },
    })
        .to(
            ".wrap",
            {
                backgroundColor: "#fff",
                color: "#000",
                ease: "none",
                duration: 5,
            },
            0
        )
        .to(".scroll", { opacity: "0", ease: "none", duration: 0 })
        .fromTo(
            ".videoWrap video",
            { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
            {
                "clip-path": "inset(0% 0% 0% 0% round 0%)",
                ease: "none",
                duration: 10,
            },
            0
        );

    // 05. con02 gsap 애니메이션
    // my work title
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con02",
            start: "0% 100%",
            end: "0% 20%",
            scrub: 1,
            // markers: true,
        },
    })
        .fromTo(
            ".con02 .title .a",
            { x: "-100%" },
            { x: "0%", ease: "none", duration: 5 },
            0
        )
        .fromTo(
            ".con02 .title .b",
            { x: "100%" },
            { x: "0%", ease: "none", duration: 5 },
            0
        );

    // workList 가 나타날 때 배경색 검정으로
    gsap.timeline({
        scrollTrigger: {
            trigger: ".workList",
            start: "0% 100%",
            end: "0% 100%",
            scrub: 1,
            // markers: true,
        },
    })
        .to(
            ".wrap",
            {
                backgroundColor: "#000",
                color: "#fff",
                ease: "none",
                duration: 5,
            },
            0
        )

        // title - position fixed 적용
        .to(
            ".con02 .title",
            {
                position: "fixed",
                ease: "none",
                left: "0",
                top: "0",
                width: "100%",
                duration: 5,
            },
            0
        )

        // workList 에 margin-top 을 적용해서 애니를 자연스럽게
        .fromTo(
            ".workList",
            { margin: "0 auto" },
            {
                margin: "100vh auto 0",
                position: "relative",
                zIndex: "10",
                duration: 1,
            },
            0
        );

    // workList 가 끝날 때 title 이 화면 밖으로 사라지도록
    gsap.timeline({
        scrollTrigger: {
            trigger: ".workList",
            start: "100% 50%",
            end: "100% 0%",
            scrub: 1,
            // markers: true,
        },
    })
        .to(".con02 .title .a", { x: "-100%", ease: "none", duration: 5 }, 0)
        .to(".con02 .title .b", { x: "100%", ease: "none", duration: 5 }, 0);

    // 06. con03 simplyScroll
    $(function () {
        $(".con03 .list").simplyScroll({
            speed: 4,
            pauseOnHover: false,
            pauseOnTouch: false,
        });
    });
});

// 07. header - menuOpen
$(function () {
    $(".menuOpen").on("click", function () {
        $(".gnb").toggleClass("on");
        $(this).toggleClass("on");
        $("body").toggleClass("on");
    });
});
