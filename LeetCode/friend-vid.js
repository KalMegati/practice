const watchedVideosByFriends = (watchedVideos, friends, id, level) => {
    const bacon = friends[id] 

    const recursor = (zip, lev) => {
        let rec = 0
        let unzipped = zip
        do {
            const intermed = unzipped.map(i => friends[i]).flat()
            unzipped = intermed.filter((item, index) => intermed.indexOf(item) === index)
            rec += 1
        }
        while (rec < lev)
        return unzipped
    }

    const movieViewings = recursor(bacon, level).map(viewer => watchedVideos[viewer]).flat()

    const movieObject = {}

    movieViewings.map(movie => {
        if (Object.keys(movieObject).includes(movie)) {
            movieObject[movie] += 1
        } else {
            movieObject[movie] = 1
        }
    })

    const finalArray = []
    let j = 0

    do {
        const tempArray = []
        for (movie in movieObject) {
            if (movieObject[movie] === j) {tempArray.push(movie)}
        }
        finalArray.push(tempArray.sort())
        j += 1
    } 
    while (j <= friends.length)

    console.log(finalArray.flat())
};

watchedVideosByFriends([["A","B"],["C"],["B","C"],["D"]], [[1,2],[0,3],[0,3],[1,2]], 0, 1)
