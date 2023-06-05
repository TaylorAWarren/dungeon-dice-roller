import React from 'react'

export default function SkillBlock() {
    const skill_level_decoder = ["no skill","known","+10","+20","+30"]

    const skills_block = (skills = static_skills) => {
        const skill_boxes = (num) => {
            return (<div style={styles.check_box_block}>{[1,2,3,4].map(i => (<div style={num >= i ? styles.checked_box : styles.unchecked_box}>&nbsp;</div>))}</div>)
        }
        const skill_items = skills.map(skill => (<div style={styles.skill_item}> ({skill.stat}) - ({skill.name}){skill_boxes(skill.val)}</div>))
        return(<div style={styles.skill_block}>
            {skill_items}
        </div>)
    }
  return (
    <div>{skills_block()}</div>
  )
}

const styles = {
    skill_item: {
        backgroundColor: "brown",
        width: "250px",
        margin: "5px",
        padding: "1px",
        height: "fit-content",
        float: "left",
        color: "gainsboro",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between"
    },
    skill_block: {
        backgroundColor: "magenta",
        width: "524px",
        display: "inline-block"
    },
    checked_box: {
        width: "15px",
        hieght: "15px",
        minWidth: "15px",
        minHieght: "15px",
        backgroundColor: "black",
        border: "1px solid white",
        margin: "1px"
    },
    unchecked_box: {
        width: "15px",
        hieght: "15px",
        minWidth: "15px",
        minHieght: "15px",
        backgroundColor: "azure",
        border: "1px solid grey",
        margin: "1px"
    },
    check_box_block: {
        display: "flex",
        justifyContent: "space-evenly"
    }
}

const static_skills = [{
    stat: "Ag",
    name: "Acrobatics",
    val: 4
},{
    stat: "S",
    name: "Athletics",
    val: 3
},{
    stat: "Per",
    name: "Awareness",
    val: 2
},{
    stat: "Fel",
    name: "Charm",
    val: 1
},{
    stat: "Fel",
    name: "Command",
    val: 0
},{
    stat: "Int",
    name: "Commerce",
    val: 0
},{
    stat: "Fel",
    name: "Deceive",
    val: 0
},{
    stat: "Ag",
    name: "Dodge",
    val: 0
},{
    stat: "Fel",
    name: "Inquiry",
    val: 0
},{
    stat: "WP",
    name: "Interrogation",
    val: 0
},{
    stat: "S",
    name: "Intimidate",
    val: 0
},{
    stat: "Int",
    name: "Logic",
    val: 0
},{
    stat: "Int",
    name: "Medicae",
    val: 0
},{
    stat: "Int",
    name: "Navigate (s)",
    val: 0
},{
    stat: "Ag",
    name: "Operate (s)",
    val: 0
},{
    stat: "Ws",
    name: "Parry",
    val: 0
},{
    stat: "Per",
    name: "Psyniscience",
    val: 0
},{
    stat: "Per",
    name: "Scrutiny",
    val: 0
},{
    stat: "Int",
    name: "Security",
    val: 0
},{
    stat: "Ag",
    name: "Sleight of Hand",
    val: 0
},{
    stat: "Ag",
    name: "Stealth",
    val: 0
},{
    stat: "Per",
    name: "Survival",
    val: 0
},{
    stat: "Int",
    name: "Tech-Use",
    val: 0
}]