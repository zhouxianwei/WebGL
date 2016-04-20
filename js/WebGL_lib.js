function getWebGLContext(canvas) {
    // body...  
    var WebGL = canvas.getContext("experimental-webgl");

    return WebGL;
}

function initShaders(webgl, VS_SOURCE, FS_SOURCE) {
    var VS = webgl.createShader(webgl.VERTEX_SHADER);
    var FS = webgl.createShader(webgl.FRAGMENT_SHADER);
    webgl.shaderSource(VS, VSHADER_SOURCE);
    webgl.shaderSource(FS, FSHADER_SOURCE);
    webgl.compileShader(VS);
    if (!webgl.getShaderParameter(VS, webgl.COMPILE_STATUS)) {
        alert("An error occurred compiling the shaders: " + webgl.getShaderInfoLog(VS));
        return null;
    }
    webgl.compileShader(FS);
    if (!webgl.getShaderParameter(FS, webgl.COMPILE_STATUS)) {
        alert("An error occurred compiling the shaders: " + webgl.getShaderInfoLog(FS));
        return null;
    }
    var shaderProgram = webgl.createProgram();
    webgl.attachShader(shaderProgram, VS);
    webgl.attachShader(shaderProgram, FS);
    webgl.linkProgram(shaderProgram);
    webgl.useProgram(shaderProgram);

}