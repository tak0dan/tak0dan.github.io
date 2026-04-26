const API_KEY = "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";
let caracteristicas = [
    "Fuerza",
    "Destreza",
    "Constitución",
    "Inteligencia",
    "Sabiduría",
    "Carisma"
];

const boton = document.getElementById("boton");
const tipo = document.getElementById("tipo");
const raza = document.getElementById("raza");

const customClass = document.getElementById("customClass");
const customRace = document.getElementById("customRace");

const result = document.getElementById("result");
const descripcionDiv = document.getElementById("descripcion");
const imagenDiv = document.getElementById("imagen");

if (!boton || !tipo || !raza || !customClass || !customRace || !result || !descripcionDiv || !imagenDiv) {
    throw new Error("Missing required DOM elements for DnD generator.");
}

// ---------------- utils ----------------
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAtributo(nombre, min, max) {
    return `${nombre}: ${aleatorio(min, max)}`;
}

// ---------------- main ----------------
boton.addEventListener("click", async () => {

    if (!API_KEY) {
        alert("Missing OpenRouter API key. Set window.OPENROUTER_API_KEY or localStorage OPENROUTER_API_KEY.");
        return;
    }

    let clase = customClass.value.trim() || tipo.value;
    let razaFinal = customRace.value.trim() || raza.value;

    if (!clase || !razaFinal) {
        alert("Choose or write BOTH class and race");
        return;
    }

    const personaje = caracteristicas
        .map(attr => getAtributo(attr, 10, 20))
        .join("\n");

    result.innerText = `${razaFinal} ${clase}\n\n${personaje}`;

    descripcionDiv.textContent = "Generating description...";
    imagenDiv.style.display = "none";

    try {
        const descripcion = await generarDescripcion(clase, razaFinal, personaje);

        if (!descripcion) {
            descripcionDiv.textContent = "Error generating description.";
            return;
        }

        descripcionDiv.textContent = descripcion;
        await generarImagenFallback(clase, razaFinal);
    } catch (error) {
        console.error("Description generation error:", error);
        descripcionDiv.textContent = "Error generating description.";
    }
});


// ---------------- TEXT (OpenRouter - correct endpoint) ----------------
async function generarDescripcion(clase, raza, atributos) {
    const prompt = `Create a DnD character:
Race: ${raza}
Class: ${clase}
Attributes:
${atributos}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "DnD Character Generator"
        },
        body: JSON.stringify({
            model: "z-ai/glm-4.5-air:free",
            messages: [{ role: "user", content: prompt }]
        })
    });

    const text = await response.text();
    console.log("STATUS:", response.status);
    console.log("RAW RESPONSE:", text);

    if (!response.ok) {
        throw new Error(text);
    }

    const data = JSON.parse(text);
    return data?.choices?.[0]?.message?.content || null;
}


// ---------------- IMAGE (FIXED SAFE VERSION) ----------------
// NOTE: OpenRouter image endpoint is unreliable → we use a safe placeholder API
async function generarImagenFallback(clase, raza) {

    const prompt = `${raza} ${clase}, fantasy character portrait, highly detailed`;

    try {
        // Stable alternative: Pollinations AI (free + works in browser)
        const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

        imagenDiv.src = url;
        imagenDiv.style.display = "block";

    } catch (error) {
        console.error("Image generation error:", error);
        imagenDiv.style.display = "none";
    }
}