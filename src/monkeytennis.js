function ballCollector(detritus) {
    return {weight: detritus.filter(num => num == 58).length * 58};
    }