function superbowlWin(record) {

    const denver = record.find(element => element.result === "W");
    return denver ? denver.year : undefined;

}
