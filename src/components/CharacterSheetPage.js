import React, {useState} from 'react'
import SkillBlock from './SkillBlock';

export default function CharacterSheetPage() {
    const [showFullName,setShowFullName] = useState([]);

    const stat_display = (stat, num) => {
        let shown = (showFullName === num)
        return (
            <div style={styles.stat_item}>
                <p  onMouseEnter={() => setShowFullName(num)} onMouseLeave={() => setShowFullName(false)}> {stat.name} </p>
                <p style={shown ? styles.stat_full_name: styles.stat_full_name_hidden}> {stat.fullName} </p>
                <p style={styles.stat_current_val}> {stat.currentVal} </p>
            </div>
        )
    }

    const value_display = (stats = static_stats) => {
        const stats_chunk = static_stats.map((stat, num) => {
            return (stat_display(stat, num))
        })
        return (
            <div style={styles.stat_container}>
                {stats_chunk}
            </div>
        )
    }

    const char_info_block = (char_info = static_char_info) => {
        const keys = [{val:"name",display_name:"Name: "},{val:"home_world",display_name:"HomeWorld: "},{val:"background",display_name:"Background: "},{val:"race",display_name:"Race: "}]

        const list_items = keys.map(key => (<p style={styles.char_info_item}>{key.display_name}{char_info[key.val]}</p>))
        return(
            <div style={styles.char_info_block}>
                {list_items}
            </div>
        )
    }

  return (
    <div>
        {char_info_block()}
        {value_display()}
        <SkillBlock />
    </div>
  )
}

const styles = {
    stat_item: {
        backgroundColor: "lavender",
        width: "80px",
        height: "80px",
        // display: "block",
        margin: "2px"
    },
    stat_container: {
        display: "flex",
        justifyContent: "space-between"
    },
    stat_current_val: {
        backgroundColor: "purple"
    },
    stat_full_name: {
        opacity: "80%",
        position: "fixed",
        background: "orange",
        display: "inline"
    },
    stat_full_name_hidden: {
        display: "none"
    },
    char_info_block: {
        backgroundColor: "crimson",
        float: "left"
    },
    char_info_item: {
        backgroundColor: "tomato"
    }
}

const static_stats = [
    {
        name: "WS",
        fullName: "Weapon Skill",
        maxVal: 25,
        currentVal: 10
    },
    {
        name: "BS",
        fullName: "Ballistic Skill",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "S",
        fullName: "Stength",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "T",
        fullName: "Toughness",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "AG",
        fullName: "Agility",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "INT",
        fullName: "Intelligence",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "PER",
        fullName: "Perception",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "WP",
        fullName: "Willpower",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "FEL",
        fullName: "Fellowship",
        maxVal: 10,
        currentVal: 10
    },
    {
        name: "INF",
        fullName: "Influence",
        maxVal: 10,
        currentVal: 10
    }
]

const static_char_info = {
    name: "Dark Heresy Character",
    home_world: "Default Home World",
    race: "Default Race",
    background: "Background",
}