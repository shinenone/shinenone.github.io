<template>
    <div id="inform">
        <h1>通知页</h1>
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="24px"
            height="30px"
            viewBox="0 0 24 30"
            style="enable-background:new 0 0 50 50;"
            xml:space="preserve">
            <rect x="0" y="0" width="4" height="20" fill="#333">
                <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                ></animate>
            </rect>
            <rect x="7" y="0" width="4" height="20" fill="#333">
                <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0.2s"
                    dur="0.6s"
                    repeatCount="indefinite"
                ></animate>
            </rect>
            <rect x="14" y="0" width="4" height="20" fill="#333">
                <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0.4s"
                    dur="0.6s"
                    repeatCount="indefinite"
                ></animate>
            </rect>
        </svg>
        <h3>正在加紧建设中！</h3>
    </div>
</template>

<script>
export default {
    name: "inform"
};
</script>
<style lang="less">
#inform {
    text-align: center;
    padding-top: 20px;

    h1 {
        padding-bottom: 50px;
    }

    h3 {
        color: rgba(255, 102, 0, 0.6);
    }

    svg rect {
        fill: #ff6700;
    }
}
</style>
