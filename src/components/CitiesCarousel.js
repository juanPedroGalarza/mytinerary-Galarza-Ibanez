import Carousel from "./Carousel"
function CitiesCarousel() {
    const cities = [
        {url:"https://imagenes.elpais.com/resizer/pKpsAzeO1aqa2M1a-6AIp_ZbxH0=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VXSEYFTVUFDGPJH6BZFVCGH6OU.jpg",title:"Bangkok"},
        {url:"https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",title:"London"},
        {url:"https://images2.alphacoders.com/263/thumb-1920-263832.jpg",title:"Ibiza"},
        {url:"https://image.winudf.com/v2/image/Y29tLmhkd2FsbHBhcGVyLmR1YmFpaGR3YWxscGFwZXJzX3NjcmVlbl8wXzh0dnNjbjdu/screen-0.jpg?fakeurl=1&type=.jpg",title:"Dubai"},
        {url:"https://wallpaperboat.com/wp-content/uploads/2019/12/amsterdam-01.jpg",title:"Amsterdam"},
        {url:"https://sportvac.com/wp-content/uploads/2021/08/115103-scaled.jpg",title:"Venice"},
        {url:"https://www.10wallpaper.com/wallpaper/1366x768/1501/Sydney_Night_City-Photography_HD_wallpapers_1366x768.jpg",title:"Sidney"},
        {url:"https://images7.alphacoders.com/458/thumb-1920-458532.jpg",title:"Las Vegas"},
        {url:"https://images6.alphacoders.com/711/thumb-1920-711134.jpg",title:"Rio de Janeiro"},
        {url:"https://gaijinpot.scdn3.secure.raxcdn.com/wp-content/uploads/sites/6/2016/02/Osaka.jpg",title:"Osaka"},
        { url: "https://images6.alphacoders.com/441/thumb-1920-441888.jpg", title: "Cape Town" },
        {url:"https://img5.goodfon.com/wallpaper/nbig/6/60/mekhiko-meksika-zdaniia-ploshchad.jpg", title:"Mexico City"}
    ]
    return (
        <Carousel data={cities} range={4} start={0} />
    )
}
export default CitiesCarousel