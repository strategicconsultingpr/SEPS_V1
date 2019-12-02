using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

namespace ASSMCA.Perfiles
{
	public partial class frmDSMI_V : System.Web.UI.Page
	{
		protected ASSMCA.perfiles.dsPerfil dsPerfil;
		protected void Page_Load(object sender, System.EventArgs e)
		{
			if ( this.Session["dsSeguridad"] == null )
			{
                this.Response.Redirect("~/Error.aspx?errMsg=sesion");
				return;
			}
			if(!this.IsPostBack)
			{
                if (this.Request.QueryString["txtDescripcion"] != null && this.Request.QueryString["txtDescripcionHidden"] != null)
                {
                    this.txtDescripcion.Value = this.Request.QueryString["txtDescripcion"].ToString();
                    this.txtDescripcionHidden.Value = this.Request.QueryString["txtDescripcionHidden"].ToString();
                }
				this.dsPerfil = (ASSMCA.perfiles.dsPerfil)this.Session["dsPerfil"];
				this.DataBind();
			}
			else
			{
				this.dsPerfil = (ASSMCA.perfiles.dsPerfil)this.Session["dsPerfil"];
			}
		}

		#region Código generado por el Diseñador de Web Forms
		override protected void OnInit(EventArgs e)
		{
			InitializeComponent();
			base.OnInit(e);
		}
		
		private void InitializeComponent()
		{    
			this.dsPerfil = new ASSMCA.perfiles.dsPerfil();
			((System.ComponentModel.ISupportInitialize)(this.dsPerfil)).BeginInit();
			this.dsPerfil.DataSetName = "dsPerfil";
			this.dsPerfil.Locale = new System.Globalization.CultureInfo("en-US");
			((System.ComponentModel.ISupportInitialize)(this.dsPerfil)).EndInit();
		}
		#endregion
	}
}
