// === 1. One-Click Initialization Gateway Logic ===
function unlockOsiLab() {
    document.getElementById('osi-clue-box').classList.add('hidden');
    document.getElementById('main-osi-sandbox').classList.remove('hidden');
}

// === 2. Core 3D OSI Operations Animation Engine ===
function triggerStoryAnimation() {
    const field = document.getElementById('storyPayload');
    if(!field || !field.value.trim()) { alert("Please type a message first!"); return; }

    const txt = field.value.trim();
    const hud = document.getElementById('visual-hud');
    const packet = document.getElementById('visualDataPacket');
    const pulse = document.getElementById('cablePulse');

    // Resetting and re-initializing visualization states
    document.querySelectorAll('.layer-node-3d').forEach(n => n.classList.remove('highlight-send', 'highlight-recv'));
    packet.style.opacity = '0';
    packet.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    packet.innerHTML = "DATA";
    pulse.style.animation = 'none';
    
    let delay = 0;
    const interval = 1200; // Node processing transmission speed (1.2 seconds)

    // [Phase 1]: Transmitter Side Graphical Encapsulation Operations (Layers 7 down to 1)
    const sendOrder =[7,6,5,4,3,2,1];
    sendOrder.forEach((num) => {
        setTimeout(() => {
            document.querySelectorAll('#senderStack .layer-node-3d').forEach(el => el.classList.remove('highlight-send'));
            const node = document.getElementById(`s-${num}`);
            node.classList.add('highlight-send');

            // 3D data cube physical translation and transformation mapping
            packet.style.opacity = '1';
            packet.style.backgroundColor = 'var(--cyber-green)';
            packet.style.boxShadow = '0 0 25px var(--cyber-green)';
            packet.style.left = `${node.parentElement.offsetLeft + (node.parentElement.offsetWidth / 2) - 20}px`;
            packet.style.top = `${node.offsetTop + 5}px`;

            if (num === 7) {
                hud.innerText = "🔍 APPLICATION LAYER: Raw data payload initialized inside memory matrix.";
                packet.innerHTML = txt.substring(0, 5);
            } else if (num === 6) {
                hud.innerText = "🔒 PRESENTATION LAYER: [OPERATION: ENCRYPTION] Cube rotates & changes cipher state.";
                packet.style.transform = 'rotateY(180deg) scale(1.1)';
                packet.innerHTML = "♣♦♠";
            } else if (num === 4) {
                hud.innerText = "✂️ TRANSPORT LAYER: [OPERATION: PACKETIZATION] Chunking data into small sub-segments.";
                packet.innerHTML = "P-1";
                packet.style.transform = 'scale(0.85)';
            } else if (num === 3) {
                hud.innerText = "🗺️ NETWORK LAYER: [OPERATION: ADDRESSING] Wrapping routing address header caps.";
                packet.style.border = '2px solid #ff3366';
            } else if (num === 1) {
                hud.innerText = "⚡ PHYSICAL LAYER: Converting structures into binary bitstream channel.";
                packet.innerHTML = "0101";
            }
        }, delay);
        delay += interval;
    });

    // [Phase 2]: Physical Link Media Routing Transmission Animation
    setTimeout(() => {
        packet.style.opacity = '0';
        hud.innerText = "🚀 NETWORK ROUTER: Routing paths selected. Emitting fiber light pulse wave...";
        pulse.style.animation = 'pulseTravel 0.8s linear forwards';
    }, delay);
    delay += interval;

    // [Phase 3]: Target Receiver Side Decapsulation Operations (Layers 1 up to 7)
    const recvOrder = [1,2,3,4,5,6,7];
    recvOrder.forEach((num) => {
        setTimeout(() => {
            document.querySelectorAll('#receiverStack .layer-node-3d').forEach(el => el.classList.remove('highlight-recv'));
            const node = document.getElementById(`r-${num}`);
            node.classList.add('highlight-recv');

            packet.style.opacity = '1';
            packet.style.backgroundColor = 'var(--cyber-blue)';
            packet.style.boxShadow = '0 0 25px var(--cyber-blue)';
            packet.style.left = `${node.parentElement.offsetLeft + (node.parentElement.offsetWidth / 2) - 20}px`;
            packet.style.top = `${node.offsetTop + 5}px`;

            if (num === 1) {
                hud.innerText = "📥 PHYSICAL LAYER: Intercepted incoming target interface node binary stream.";
                packet.innerHTML = "0101";
            } else if (num === 3) {
                hud.innerText = "🛡️ NETWORK LAYER: Target matching verified. De-wrapping IP envelope headers.";
                packet.style.border = 'none';
            } else if (num === 4) {
                hud.innerText = "🧩 TRANSPORT LAYER: [OPERATION: REASSEMBLY] Stitching sub-segments back to block.";
                packet.innerHTML = "♣♦♠";
                packet.style.transform = 'scale(1.1)';
            } else if (num === 6) {
                hud.innerText = "🔓 PRESENTATION LAYER: [OPERATION: DECRYPTION] Reversing cipher cubes back to plaintext.";
                packet.style.transform = 'rotateY(0deg) scale(1)';
                packet.innerHTML = txt.substring(0, 5);
            } else if (num === 7) {
                hud.innerText = "🎉 APPLICATION LAYER: Mission success! Message delivered in native original form.";
                packet.innerHTML = txt;
                packet.style.opacity = '0';
            }
        }, delay);
        delay += interval;
    });
}
