function solve(workerObj){
    if (workerObj.dizziness) {
        workerObj.levelOfHydrated = workerObj.weight * workerObj.experience * 0.1;
        workerObj.dizziness = false;
    }

    return workerObj;
}

 console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: true }))