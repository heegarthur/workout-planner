function get_schema() {
  const schema = localStorage.getItem("schema") || "";
  document.getElementById("showschema").innerText = schema;
  document.getElementById("textarea_schema").value = schema;
  autoGrow(document.getElementById("textarea_schema"));
}

function autoGrow(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

function save_area() {
  const textarea = document.getElementById("textarea_schema");
  const newSchema = textarea.value.trim();
  const oldSchema = localStorage.getItem("schema") || "";

  if (newSchema === "") {
    const confirmClear = confirm("do you really want to clear the schema");
    if (!confirmClear) {
      textarea.value = oldSchema;
      autoGrow(textarea);
      return;
    }
  }

  localStorage.setItem("schema", newSchema);
  document.getElementById("showschema").innerText = newSchema;
  autoGrow(textarea);
}

get_schema();
