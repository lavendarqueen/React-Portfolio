import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resumePhyllisAnnLataille from "../assets/pdf/resumePhyllisAnnLataille";

export default function ResumePage() {
  return (
    <div>
      <document id="resume" src={resumePhyllisAnnLataille} width="90%" />
      Resume of Phyllis Ann Lataille
    </div>
  );
}
