function adjustNav(scrollY) {
    return scrollY < 30 ? `translate(0,${30 - scrollY})` : "translate(0,0)";
}

