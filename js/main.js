// === Full-screen Matrix Binary Stream Animation Engine ===
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('binaryCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    function drawBinaryRain() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff66';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    const rainInterval = setInterval(drawBinaryRain, 30);

    setTimeout(() => {
        clearInterval(rainInterval);
    }, 3200);
});

// 1. Initial Sequence Automation Triggers
setTimeout(() => {
    document.getElementById('hacker-overlay').classList.add('hidden');
    document.getElementById('welcome-overlay').classList.remove('hidden');
}, 3200);

function bootSystem() {
    document.getElementById('welcome-overlay').classList.add('hidden');
    document.getElementById('main-workspace').classList.remove('hidden');
    executeCommand('osilab'); // Auto-loads OSI lab environment as default filled module context
    startLiveMetrics();
}

// 2. Background Threat Vector Mapping & Telemetry Updates
function startLiveMetrics() {
    const log = document.getElementById('liveAttackLog');
    const countEl = document.getElementById('packetCount');
    let packets = 2450;

    const locations = ["US_EAST_NODE", "EU_WEST_SERVER", "ASIA_SOUTH_HEAD", "KOLKATA_EDGE_NODE", "TOKYO_PROXY", "FRANKFURT_CORE"];
    
    setInterval(() => {
        packets += Math.floor(Math.random() * 5) + 1;
        countEl.innerText = packets;

        if(Math.random() > 0.4) {
            const loc = locations[Math.floor(Math.random() * locations.length)];
            const ip = `192.168.${Math.floor(Math.random()*254)}.${Math.floor(Math.random()*254)}`;
            log.innerHTML = `<p style="color: #ff3366; margin-bottom:4px;">&gt; INTRUSION FROM ${loc} (${ip}) -> BLOCKED</p>` + log.innerHTML;
            if(log.childNodes.length > 5) log.removeChild(log.lastChild);
        }
    }, 1200);
}

// 3. Dynamic Multi-file Navigation Routing Controller
function executeCommand(cmd) {
    const display = document.getElementById('dynamic-content-area');
    if(cmd === 'clear') { display.innerHTML = '<p style="color:#444;">Monitor cleared. Core workspace node idling...</p>'; return; }
    
    // Maps each command argument to its distinct, sandbox file parameter safely
    let path = '';
    if(cmd === 'about') path = 'sections/about.html';
    else if(cmd === 'works') path = 'sections/works.html';
    else if(cmd === 'osilab') path = 'sections/osi-lab.html';

    fetch(path)
        .then(res => {
            if(!res.ok) throw new Error('Module packet stream dropped');
            return res.text();
        })
        .then(html => { 
            display.innerHTML = html; 
        })
        .catch(() => { 
            display.innerHTML = '<p style="color:#ff3366; font-family:monospace;">[CRITICAL ERROR] Failed to bind target infrastructure module.</p>'; 
        });
}
