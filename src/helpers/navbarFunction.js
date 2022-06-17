export const scrollItemMenu = (e) => {
    const element = e.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;

        window.scroll({
            top: to -70,
            behavior: "smooth"
        });
}