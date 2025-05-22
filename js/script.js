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
});
