

function Icons() {


    const icons = {textAlign: 'right', position: 'relative', bottom: '43.5px'};
    const listItems = {lineStyle: 'none', margin: '0 0 0 10px', display: 'inline'};
    const icon = {color: 'black', height: '5px', width: '5px' }

    return (
        <div style={icons}>
            
            <ul>

                <li style={listItems}><a style={icon} href="https://www.linkedin.com/in/josh-haokip-88b814124/" target="_blank"><i class="fa fa-linkedin fa-spin"></i></a></li>
                <li style={listItems}><a style={icon} href="https://github.com/JoshHaokip" target="_blank"><i class="fa fa-github fa-spin"></i></a></li>
                <li style={listItems}><a style={icon} href="https://dribbble.com/JoshHaokip" target="_blank"><i class="fa fa-dribbble fa-spin"></i></a></li>
                <li style={listItems}><a style={icon} href="mailto:joshhaokip@gmail.com" target="_blank"><i class="fa fa-at fa-spin"></i></a></li>
    
            </ul>

        </div>
    )
    
}

export default Icons;