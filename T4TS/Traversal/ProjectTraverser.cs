﻿using EnvDTE;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T4TS
{
    public class ProjectTraverser
    {
        public Action<CodeNamespace> WithNamespace { get; private set; }

        public ProjectTraverser(Project project, Action<CodeNamespace> withNamespace)
        {
            if (project == null)
                throw new ArgumentNullException("project");
            
            if (withNamespace == null)
                throw new ArgumentNullException("withNamespace");

            WithNamespace = withNamespace;

            if (project.ProjectItems != null)
                Traverse(project.ProjectItems);
        }

        private void Traverse(ProjectItems items)
        {
            foreach (ProjectItem pi in items)
            {
                if (pi.FileCodeModel != null)
                {
                    var codeElements = pi.FileCodeModel.CodeElements;
                    foreach (var ns in codeElements.OfType<CodeNamespace>())
                        WithNamespace(ns);
                }

                if (pi.ProjectItems != null)
                    Traverse(pi.ProjectItems);
            }
        }
    }
}
